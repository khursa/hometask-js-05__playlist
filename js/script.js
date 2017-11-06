;(function(){
			"use strict";

		function printList(array) {

			var printStr = '<ol>PLAYLIST';

			for (var key in array) {
				printStr += '<li>' + '<span>' + (array[key].author) 
				+ '  -  "' + (array[key].song) + '"' + '</span>' + '</li>';

			}

			printStr += '</ol>';

			document.write(printStr);
		}

		var playList = [
			 {
			 author: "LED ZEPPELIN",
			 song:"STAIRWAY TO HEAVEN"
			 },
			 {
			 author: "QUEEN",
			 song:"BOHEMIAN RHAPSODY"
			 },
			 {
			 author: "LYNYRD SKYNYRD",
			 song:"FREE BIRD"
			 },
			 {
			 author: "DEEP PURPLE",
			 song:"SMOKE ON THE WATER"
			 },
			 {
			 author: "JIMI HENDRIX",
			 song:"ALL ALONG THE WATCHTOWER"
			 },
			 {
			 author: "AC/DC",
			 song:"BACK IN BLACK"
			 },
			 {
			 author: "QUEEN",
			 song:"WE WILL ROCK YOU"
			 },
			 {
			 author: "METALLICA",
			 song:"ENTER SANDMAN"
			 }
		];

	printList(playList);
		
	})();