import React, { Component } from 'react'
// import './clever/style.css'
import './Background.css'

export default class Background extends Component {
    render() {
        return (
            <div>
                {/*  style={{backgroundImage: "url("+"./clever/img/bg-img/bg1.jpg"+")"}} */}
                {/* <!-- ##### Hero Area Start ##### --> */}
                <section class="hero-area bg-img bg-overlay-2by5">
                    <div class="container h-100">
                        <div class="row h-100 align-items-center">
                            <div class="col-12">
                                {/* <!-- Hero Content --> */}
                                <div class="hero-content text-center">
                                    <h2>Let's Study Together</h2>
                                    <a href="#" class="btn clever-btn">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ##### Hero Area End ##### --> */}
            </div>
        )
    }
}
