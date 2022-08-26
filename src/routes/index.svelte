<script lang="ts">
	import Icon from './Icon.svelte';

	let city = '';
	let temperature: number;
	let searchedCity = '';
	let weatherCondition = '';
	let humidity = '';
	let wind = '';
	let airPressure = '';
	let isError = false;
	let isFetching = false;

	async function getCurrentlat() {
		await fetch(
			`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=9f64ce41f1e45219356aea59893d1b67`
		)
			.then((latLong) => {
				return latLong.json();
			})
			.then((latLong) => {
				return fetch(
					`https://api.openweathermap.org/data/2.5/weather?lat=${latLong[0].lat}&lon=${latLong[0].lon}&appid=9f64ce41f1e45219356aea59893d1b67&units=metric`
				);
			})
			.then((response) => {
				return response.json();
			})
			.then((temp) => {
				temperature = temp.main.temp;
				wind = temp.wind.speed;
				airPressure = temp.main.pressure;
				isFetching = true;
				humidity = temp.main.humidity;
				weatherCondition = temp.weather[0].main;
			})
			.catch((error) => {
				isError = true;
				throw new Error(error);
			});
	}

	const handleSubmit = (event: SubmitEvent) => {
		const formData = new FormData(event?.target);
		const data = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}
		searchedCity = data['searchedCity'];
		isFetching = false;
		isError = false;
		getCurrentlat();
	};
</script>

<div class="form-container">
	<form action="#" on:submit|preventDefault={handleSubmit}>
		<input
			placeholder="Type a city ..."
			bind:value={city}
			type="text"
			name="searchedCity"
			required
		/>
		<button type="submit">What's the temperature dude?</button>
	</form>

	{#if isFetching}
		<div class="result-container">
			<div>
				<div class="searched-city">
					<Icon name="map" height="38" width="38" />
					{searchedCity}
				</div>
				<div class="main-temp">
					<div>
						<span class="temperature">{temperature}</span>°
					</div>
					<span>{weatherCondition}</span>
				</div>

				<div class="other-info">
					<div><Icon name="pressure" height="28" width="28" /> {airPressure}hpa</div>
					<div><Icon name="humidity" height="28" width="28" />{humidity}%</div>
					<div><Icon name="wind" height="28" width="28" />{wind}</div>
				</div>
			</div>
		</div>
	{:else if isError}
		<div class="result-container">
			<p style="text-align: center;">Wrong city entered. Please enter a correct city</p>
		</div>
	{/if}
</div>

<style lang="scss">
	.form-container {
		margin: 0 auto;
		max-width: 600px;

		form {
			display: flex;
			flex-direction: column;
			max-width: 400px;
			margin: 0 auto;
			padding: 50px;

			input {
				padding: 20px;
				font-size: 24px;
				margin-bottom: 25px;
				transition: all 300ms ease-in;
			}
		}

		.result-container {
			backdrop-filter: blur(10px);
			color: #fff;
			border-radius: 15px;

			> div {
				padding: 20px;

				> div:not(:last-child) {
					margin-bottom: 40px;
				}
				> div:first-child {
					margin-bottom: 25px;
				}
			}

			.searched-city {
				display: flex;
				align-items: center;
				font-size: 28px;
				gap: 10px;
			}

			.main-temp {
				display: flex;
				flex-direction: column;
				align-items: center;
				line-height: 1;

				> div {
					display: flex;
					font-size: 36px;
					margin-bottom: 10px;
					.temperature {
						font-size: 65px;
						color: #d0e8ff;
					}
				}

				> span {
					font-size: 16px;
				}
			}
			.other-info {
				display: flex;
				justify-content: space-between;

				> div {
					display: flex;
					gap: 10px;
					align-items: center;
				}
			}
		}
	}
</style>
