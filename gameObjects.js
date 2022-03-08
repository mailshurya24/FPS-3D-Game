AFRAME.registerComponent("wirefence", {
    init: function() {
        posX = -20
        posZ = 85

        for(var i = 0; i < 10; i++)
        {
            var element1 = document.createElement("a-entity");
            var element2 = document.createElement("a-entity");
            var element3 = document.createElement("a-entity");
            var element4 = document.createElement("a-entity");

            var scale = {x: 2, y: 2, z: 2};

            posX = posX + 5
            posY = 2.5
            posZ = posZ - 5

            element1.setAttribute("id", "element1" + i);
            element2.setAttribute("id", "element2" + i);
            element3.setAttribute("id", "element3" + i);
            element4.setAttribute("id", "element4" + i);

            element1.setAttribute("position", {x: posX, y: posY, z: -35});
            element2.setAttribute("position", {x: posX, y: posY, z: 85});
            element3.setAttribute("position", {x: -35, y: posY, z: posZ});
            element4.setAttribute("position", {x: 50, y: posY, z: posZ});

            element1.setAttribute("scale", scale);
            element2.setAttribute("scale", scale);
            element3.setAttribute("scale", scale);
            element4.setAttribute("scale", scale);

            element1.setAttribute("gltf-model", "./models/shooter/scene.gltf");
            element2.setAttribute("gltf-model", "./models/shooter/scene.gltf");
            element3.setAttribute("gltf-model", "./models/shooter/scene.gltf");
            element4.setAttribute("gltf-model", "./models/shooter/scene.gltf");

            element1.setAttribute("static-body");
            element2.setAttribute("static-body");
            element3.setAttribute("static-body");
            element4.setAttribute("static-body");

            scene = document.querySelector("#scene");

            scene.appendChild(element1);
            scene.appendChild(element2);
            scene.appendChild(element3);
            scene.appendChild(element4);
        }
    }
})