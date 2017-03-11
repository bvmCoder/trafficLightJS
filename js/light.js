(function() {
    'use strict'

    const _id = (id) => {
        return document.getElementById(id)
    }

    const _class = (className) => {
        return document.getElementsByClassName(className)
    }

    function _queSelAll(query) {
        return document.querySelectorAll(query)
    }

    var buttons = _queSelAll('.button')
    var bulbs = Array.from(_queSelAll('.bulb'))

    function clearLights() {

        Array.prototype.forEach.call(bulbs, function(bulb) {
            //console.log(bulb.tagName)
            bulb.style.backgroundColor = '#111111'
        });
    }

    function turnOnLight(event) {
        clearLights()
        console.log(event)
        var clickedElement = this

        if (clickedElement.id === 'stopButton') {
            _id('stopLight').style.backgroundColor = 'red'
        } else if (clickedElement.id === 'slowButton') {
            _id('slowLight').style.backgroundColor = 'yellow'
        } else {
            _id('goLight').style.backgroundColor = 'green'
        }
    }


    Array.prototype.forEach.call(buttons, function(button) {
        //console.log(button.tagName)
        button["addEventListener"]('click', turnOnLight, false)
    });


    function Building(floors) {
        this.what = "Building"
        this.floors = floors
    }
    Building.prototype.countFloors = function () {
        console.log(`I have ${this.floors} floors!`)
    }
    let yourHouse = new Building(2)
    let theOffice = new Building(52)

    yourHouse.countFloors()
    theOffice.countFloors()

})();
