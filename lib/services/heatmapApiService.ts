export async function fetchDataFromAPI(uuid: string): Promise<any> {
    const response = await fetch('https://a4d1us3g44.execute-api.us-west-1.amazonaws.com/Prod/get_mouses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "uuid": uuid
      }),
    });
    const data = await response.json();
    console.log(data)
    return data["data"];
}