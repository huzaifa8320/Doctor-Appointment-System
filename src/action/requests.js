'use server'

import { revalidatePath } from "next/cache";


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

export async function getRequest(status) {            
console.log('log status' , status);

    
    let request = await fetch(`${process.env.BASE_URL}api/requests?status=${status ? status : ""}`);
    
    request = request.json();
    
    return request;

}

export async function updateRequest(id , status) {            

    let request = await fetch(`${process.env.BASE_URL}api/requests`,{
        method : 'PUT',
        body: JSON.stringify({id , status})
    });

    request = request.json();   
    revalidatePath('/')
     
}
