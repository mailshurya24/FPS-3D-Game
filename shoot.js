AFRAME.registerComponent("bullets", {
  init: function () {
    this.shootBullet();
  },
  shootBullet: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "z") {
        var bullet = document.createElement("a-entity");

        bullet.setAttribute("geometry", {
          primitive: "sphere",
          radius: 0.1,
        });

        bullet.setAttribute("material", "color", "black");
        bullet.setAttribute("dynamic-body", {shape: "sphere", mass: "0"})

        var cam = document.querySelector("#camera-rig");

        pos = cam.getAttribute("position");

        bullet.setAttribute("position", {
          x: pos.x,
          y: pos.y - 0.6,
          z: pos.z - 1.2,
        });

        var camera = document.querySelector("#camera").object3D;

        //get the camera direction as Three.js Vector
        var direction = new THREE.Vector3();
        camera.getWorldDirection(direction);

        //set the velocity and it's direction
        bullet.setAttribute("velocity", direction.multiplyScalar(-10));
        bullet.setAttribute("dynamic-body", {shape: "sphere", mass: "50"})
        
        var scene = document.querySelector("#scene");

        bullet.addEventListener("collide", 
          this.removeBullet()
        )

        scene.appendChild(bullet);
      }
    });
  },

  removeBullet: function(e)
  {
    var scene = document.querySelector("#scene");
    var element = e.detail.target.el;
    var elementhit = e.detail.body.el;

    if(elementhit.id.includes("enemy"))
    {
      var counttankEl = document.querySelector("#counttank");
      var tanksfired = parseInt(counttankEl.getAttribute("text").value);
      tanksfired -= 1
      counttankEl.setAttribute("text", {value: tanksfired})

      if(tanksfired === 0){
        var txt = document.querySelector("#completed");
        txt.setAttribute("visible", true)
      }

      scene.removeChild(elementhit)
    }
    element.removeEventListener("collide", this.removeBullet());
    scene.removeChild(element)
  }
});