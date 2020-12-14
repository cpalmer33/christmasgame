import React from 'react'
import "./Loading.css"


function Loading() {
    return (
        <div>
            <>
            <h1>Coffee Loader</h1>
<div className='coffee-maker'>
	<div className='top'></div>
	<div className='carafe'>
		<ul>
			<li>100%</li>
			<li>&nbsp;</li>
			<li>&nbsp;</li>
			<li>&nbsp;</li>
			<li>&nbsp;</li>
		</ul>
		<div className='contain'>
			<div className='drip'></div>
			<div className='coffee'></div>
		</div>
		<div className='handle'></div>
	</div>
	<div className='side'></div>
	<div className='base'></div>
</div>



            </>
        </div>
    )
}

export default Loading
