import React, { Component } from "react";
import $ from "jquery";


export class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-default navbar-fixed-top" id="myScrollspy">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">
              Bootstrap
            </a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="#spytop">Home</a>
              </li>
              <li>
                <a href="#spydesingers">Designers</a>
              </li>
              <li>
                <a href="#spydevelopers">Developers</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

$(function(){
	var navbar = $('.navbar');
	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
			navbar.removeClass('navbar-scroll');
		} else {
			navbar.addClass('navbar-scroll');
		}
	});
});