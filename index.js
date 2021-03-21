var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
var renderer=new THREE.WebGLRenderer({ antialias: true });
const mouse = new THREE.Vector2();
const target = new THREE.Vector2();
const windowHalf = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 );
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);
// let COLORS = [ 0xfcd600, 0xfc8600, 0xfc9700, 0xfca000, 0xfca800, 0xfcb900, 0xfcc500,0x948566,0xffdc91 ],spheres = [],geometry,material,mesh;
let flag=0;
window.addEventListener('resize',()=>{
    let height= window.innerHeight;
    let width=window.innerWidth;
    renderer.setSize(width,height);
    camera.aspect=width/height;
    camera.updateProjectionMatrix();
});
let callback=(event)=>{
    console.log(flag);
    if(event.alpha)
        flag=1;
    else if(flag==1)
        window.removeEventListener("deviceorientation",callback);
    else
    {
        console.log("set camera position")
    }
};
window.addEventListener("deviceorientation",callback);

const cubegeometry = new THREE.BoxGeometry( 80, 80, 80 );//create shape
// geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(0,3,0));
//design for each side given below
//Materials can be MeshLambertMaterial, MeshphongMaterial, MeshBasicMaterial, MeshBlinnMaterial
let cubeMaterials=[
        new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/right.jpeg'),side:THREE.BackSide}),//right side
        new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('img/left.jpeg'),side:THREE.BackSide}),//left side
        new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/top.jpeg'),side:THREE.BackSide}),//top side
        new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('img/bottom.jpeg'),side:THREE.BackSide}),//bottom side
        new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/back.jpeg'),side:THREE.BackSide}),//front side
        new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('img/front.jpeg'),side:THREE.BackSide}),//back side
    ];
    //MeshBasicMaterial does not depend on lighting
    //MeshFaceMaterial used instead of mesh material
    const cubematerial = new THREE.MeshFaceMaterial(cubeMaterials);//give material and colour
    const cube = new THREE.Mesh( cubegeometry, cubematerial );
    
    scene.add( cube );
    

    
    
    
    // let modelMaterial,modelGeometry;
    // const mtlloader = new THREE.MTLLoader();
    // mtlloader.setPath('/models/');
    // mtlloader.load('b.mtl',function(materials){
    //     materials.preload();
    //     const objloader = new THREE.OBJLoader();
    //     objloader.setPath('/models/');
    //     const mtl= new THREE.MeshBasicMaterial({color:0xffffff});
    //     objloader.setMaterials(materials);
    //     objloader.load('b.obj',function(object){
    //         // object.material= new THREE.MeshBasicMaterial({color:0xffffff});
            
    //         object.scale.set(60,60,60);
    //         scene.add(object);
    //     });
    // })
    // for(let i=0;i<300;i++)
    // {
        
    //     geometry = new THREE.SphereGeometry( Math.random()*0.4, 10, 10 );
    //     material = new THREE.MeshBasicMaterial( { color: COLORS[i%9] } );
    //     geometry.applyMatrix4( new THREE.Matrix4().makeTranslation( Math.random()*50+25,Math.random()*50+25,Math.random()*50+25) );
        
    //     mesh = new THREE.Mesh( geometry, material);
    //     //   mesh.rotation.x = Math.random()*100;
    //     mesh.rotation.y = Math.random()*100;
    //     mesh.rotation.z = Math.random()*100;
    //     scene.add( mesh );
    //     spheres.push( mesh );
    // }
    
    //making ceiling and floor
    // let topDownGeometry=new THREE.BoxGeometry(10,1,10);
    // let topDownMaterial=
    // new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/top-bottom.jpg'),side:THREE.DoubleSide});
    // let ceilingCube= new THREE.Mesh(topDownGeometry,topDownMaterial);
    // ceilingCube.position.y=5;
    // let floorCube= new THREE.Mesh(topDownGeometry,topDownMaterial);
    // floorCube.position.y=-5;
    
    // //making left and right walls
    // let leftRightGeometry=new THREE.BoxGeometry(1,10,10);
    // let leftRightMaterial=
    // new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/wall.jpg'),side:THREE.DoubleSide});
    // let leftWall= new THREE.Mesh(leftRightGeometry,leftRightMaterial);
    // leftWall.position.x=-5;
    // let rightWall= new THREE.Mesh(leftRightGeometry,leftRightMaterial);
    // rightWall.position.x=5;
    
    // scene.add(leftWall);
    // scene.add(rightWall);
    // scene.add(ceilingCube);
    // scene.add(floorCube);
    
    let ambientLight=new THREE.AmbientLight(0xccccff,0.7);
    scene.add(ambientLight);
    
    // let light1= new THREE.PointLight(0xff0040,2,100);
    // light1.position.set(-40,80,20);
    
    // let light2= new THREE.PointLight(0xffffff,2,100);
    // light2.position.set(40,80,20);
    // let light3= new THREE.PointLight(0x80ff80,3,50);
    // scene.add(light1);
    // scene.add(light2);
    // scene.add(light3);
    let directionalLight = new THREE.DirectionalLight(0xccccff,0.01);
    directionalLight.position.set(0,3,50);
    let directionalLight1 = new THREE.DirectionalLight(0xccccff,0.022);
    directionalLight1.position.set(20,2.5,50);
    let directionalLight2 = new THREE.DirectionalLight(0xccccff,0.022);
    directionalLight2.position.set(-20,2.5,50);
    
    scene.add(directionalLight);
    scene.add(directionalLight1);
    scene.add(directionalLight2);
    // let spotLight= new THREE.SpotLight(0xff45f6,25);
    // spotLight.position.set(0,3,0);
    // // scene.add(spotLight);
    // let skyGeo = new THREE.SphereGeometry(50, 25, 25); 
    // let sphereMaterial=new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('img/sky.jpg'),side:THREE.BackSide})
    // let sky=new THREE.Mesh(skyGeo,sphereMaterial);
    // scene.add(sky);
    


    function onMouseMove( event ) {
    mouse.x = ( event.clientX - windowHalf.x );
    mouse.y = ( event.clientY - windowHalf.x );
    }
    let controls;
let funct=()=>{

if(flag){
    controls = new THREE.DeviceOrientationControls(camera);
}
else{
    document.addEventListener( 'mousemove', onMouseMove, false );
    console.log("reached here");

}
}
setTimeout(()=>{funct()} ,2000);

    
    //game logic
    var update1= ()=>{

        
        if(flag){
            controls.update();
        }

        else
        {

            target.x = ( 1 - mouse.x ) * 0.002;
            target.y = ( 1 - mouse.y ) * 0.002;
            camera.rotation.x += 0.05 * ( target.y - camera.rotation.x );
            camera.rotation.y += 0.05 * ( target.x - camera.rotation.y );
        }




        // for (var i = 0; i < spheres.length; i++) {
        //     // spheres[i].rotation.z += 0.012;
        // spheres[i].rotation.x += 0.007;}
        // spheres[i].rotation.y += 0.007;
    // model.rotation.y+=0.01;
    // cube.rotation.x+=0.01;
    // cube.rotation.x+=0.005;
    // sky.rotation.y+=0.0005;
    // sky.rotation.x+=0.0005;
    // var time = Date.now( ) *0.0005;

    // light1.position.x=Math.sin(time*0.7)*30;
    // light1.position.y=Math.cos(time*0.5)*40;
    // light1.position.z=Math.cos(time*0.3)*30;

    // light2.position.x=Math.cos(time*0.3)*30;
    // light2.position.y=Math.sin(time*0.5)*40;
    // light2.position.z=Math.sin(time*0.7)*30;

    // light3.position.x=Math.sin(time*0.7)*30;
    // light3.position.y=Math.cos(time*0.5)*40;
    // light3.position.z=Math.sin(time*0.3)*30;
};
//what we want to render
var render=()=>{
    renderer.render(scene,camera);
};
//game loop (event loop for game),(update, render, repeat)
var GameLoop=()=>{

    requestAnimationFrame(GameLoop); //run every single frame
    update1();
    render();
};

GameLoop();