import React, { useEffect, useState } from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'




function LandingPage() {

    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        var COUNT = 300;
        var masthead = document.querySelector('.sky');
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var width = masthead.clientWidth;
        var height = masthead.clientHeight;
        var i = 0;
        var active = false;
      
        function onResize() {
          width = masthead.clientWidth;
          height = masthead.clientHeight;
          canvas.width = width;
          canvas.height = height;
          ctx.fillStyle = '#FFF';
      
          var wasActive = active;
          active = width > 600;
      
          if (!wasActive && active)
            requestAnimationFrame(update);
        }
      
        var Snowflake = function () {
          this.x = 0;
          this.y = 0;
          this.vy = 0;
          this.vx = 0;
          this.r = 0;
      
          this.reset();
        }
      
        Snowflake.prototype.reset = function() {
          this.x = Math.random() * width;
          this.y = Math.random() * -height;
          this.vy = 1 + Math.random() * 3;
          this.vx = 0.5 - Math.random();
          this.r = 1 + Math.random() * 2;
          this.o = 0.5 + Math.random() * 0.5;
        }
      
        canvas.style.position = 'absolute';
        canvas.style.left = canvas.style.top = '0';
      
        var snowflakes = [], snowflake;
        for (i = 0; i < COUNT; i++) {
          snowflake = new Snowflake();
          snowflake.reset();
          snowflakes.push(snowflake);
        }
      
        function update() {
      
          ctx.clearRect(0, 0, width, height);
      
          if (!active)
            return;
      
          for (i = 0; i < COUNT; i++) {
            snowflake = snowflakes[i];
            snowflake.y += snowflake.vy;
            snowflake.x += snowflake.vx;
      
            ctx.globalAlpha = snowflake.o;
            ctx.beginPath();
            ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.fill();
      
            if (snowflake.y > height) {
              snowflake.reset();
            }
          }
      
          requestAnimationFrame(update);
        }
      
        // shim layer with setTimeout fallback
      
        onResize();
        window.addEventListener('resize', onResize, false);
      
        masthead.appendChild(canvas);

    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 1000)
    }, [])

    const signIn = () => {

    }
    return (
        

        <div className="landingpage">
            {/* {loading && <div className="sky"></div>} */}
            <div className="sky"></div>
            
            <div className="landingcontainer">
            <div className="headeroverlay">
                <div className="headercontent">
            
            </div>
            </div>
            <div className="media">
                <ul>
                    <li className="cool"><a href="/slide"><FontAwesomeIcon icon={faSnowflake}/></a></li>
                    <li className="cool" ><a href="/slidetwo"><FontAwesomeIcon icon={faSnowflake}/></a></li>
                    <li className="cool"><a href="/slidethree"><FontAwesomeIcon icon={faSnowflake}/></a></li>
                    <li className="cool"><a href="/slidefour"><FontAwesomeIcon icon={faSnowflake}/></a></li>
                    <li className="cool"><a href="/slidefive"><FontAwesomeIcon icon={faSnowflake}/></a></li>
                    
                    
                </ul>
            </div>
          
            </div>
        </div>
        
    )
}

export default LandingPage
