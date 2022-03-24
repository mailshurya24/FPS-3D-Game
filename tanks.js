AFRAME.registerComponent("enemybullets", {
    init: function()
    {
        setInterval(this.shootEnemy(), 2000)
    },

    shootEnemy: function()
    {
        var els = document.querySelectorAll(".enemy")

        for(var i = 0; i < els.length; i++)
        {
            var enemyBullet = document.createElement("a-entity");
            enemyBullet.setAttribute("geometry", {primitive: "sphere", radius: 0.1})
            enemyBullet.setAttribute("material", {color: "#282B29"})

            var position = els[i].getAttribute("position")
            enemyBullet.setAttribute("posiion", {x: position.x + 1.5, Y: position.y + 3.5, z: position.z})

            var scene = document.querySelector("#scene");
            scene.appendChild(enemyBullet)

            var position1 = new THREE.Vector3()
            var position2 = new THREE.Vector3()

            var enemy = els[i].object3D
            var player = document.querySelector("#weapon").object3D
            player.getWorldPosition(position1)
            enemy.getWorldPosition(position2)
            
            var direction = new THREE.Vector3();
            direction.subVectors(position1, position2).normalize()

            enemyBullet.setAttribute("velocity", direction.multiplyScalar(10))
            enemyBullet.setAttribute("dynamic-body", {shape: "sphere", mass: 0})

            var element = document.querySelector("#countlife")
            var playerlife = parseInt(element.getAttribute("text").value)

            enemyBullet.addEventListener("collide", function(e){
                if(e.detail.body.el.id === "weapon")
                {
                    if(playerlife > 0){
                        playerlife -= 1
                        element.setAttribute("text", {value: playerlife})
                    }

                    if(playerlife <= 0){
                        var txt = document.querySelector("#over");
                        txt.setAttribute("visible", true)
                        var tankEl = document.querySelectorAll(".enemy");
                        
                        for(var i = 0; i < tankEl.length; i++){
                            scene.removeChild(tankEl[i])
                        }
                    }
                }
            })

        }
    }
})