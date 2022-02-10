AFRAME.registerComponent("bullets", {
    init: function()
    {
        this.shootBullet();
    },

    shootBullet: function()
    {
        window.addEventListener("click", (i)=>{
            const element = document.createElement("a-entity");
            element.setAttribute("geometry", {primitive: "sphere", radius: 0.5});
            element.setAttribute("material", {color: "black"});

            var camera_pos = document.querySelector("#camera");
            camera_pos.getAttribute("position");
            element.setAttribute("position", {x: camera_pos.x, y: camera_pos.y, z: camera_pos.z - 30});

            var camera = document.querySelector("#camera").object3D;
            var direction = new THREE.Vector3();
            camera.getWorldDirection(direction);
            element.setAttribute("velpcity", direction.multiplyScalar(-10))
            element.setAttribute("velocity", direction.multiplyScalar(-10))
            
            var scene = document.querySelector("#scene");
            scene.appendChild(element)

        })
    },

})