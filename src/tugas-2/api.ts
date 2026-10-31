
function getWeatherData(): void {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m';
    
    fetch(url)
        .then((response) => response.json())
        .then((data: { hourly: { time: string[], temperature_2m: number[] } }) => {
            const weatherList = data.hourly.time.map((time: string, index: number) => ({
                'Waktu (WIB)': time.replace('T', ' '),
                'Suhu (°C)': data.hourly.temperature_2m[index]
            }));
            console.table(weatherList.slice(0, 15));
        })
        .catch((error: unknown) => {
            console.error('Gagal mengambil data cuaca:', error);
        });
}

export { getWeatherData };