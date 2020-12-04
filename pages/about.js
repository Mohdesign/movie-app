import Head from 'next/head'

// function component -  
export default function About() {

	const message = 7+7

    return (
  	<>
  	<h1>About page - { message }</h1>
  	</>
  	)
}