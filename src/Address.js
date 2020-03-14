import React, {useState, useEffect} from 'react'

const Separator = ()=> (<span> - </span>)

const Song = (props)=> {
		return (
			<div>
				<p>{props.street}</p>
				<p>{props.city}</p>
				<p>{props.zip}</p>
			</div>
		)
}


    const params = {address: {street: streetValue; city: cityValue, zip: zipValue}}
    fetch(`http://address.api:3020/addresses/${props.id}`, {
      method: "PATCH",
      body: JSON.stringify(params)
    }).then((res)=> console.log(res))
    .catch((err)=> console.log("Oops", err))
  }

