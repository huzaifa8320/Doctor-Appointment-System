'use server'

export async function addRequest(data) {            

    const add = await fetch(`${process.env.BASE_URL}api/requests`, {
        method: "POST",
        body: JSON.stringify(data)
    });

    if (!add.ok) {
        const errorData = await add.json();
        throw new Error(errorData.msg || "Failed to submit request");
    }

    return add.json();
}



export async function getRequest() {            

    let request = await fetch(`${process.env.BASE_URL}api/requests`);

    request = request.json();

    return request;
}
