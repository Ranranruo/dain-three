import * as THREE from 'three'
import Page from './Page';
import Floor from '../staticObject/floor';
import AddPlace from '../entity/AddPlace';

class DefaultPage extends Page {
    protected camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera();
    constructor() {
        super();

        const floor = new Floor().create();
        floor.position.set(0, -.05, 0)

        const addPlace = new AddPlace({
            id: 1,
            onClick: () => {
                console.log(1);
                return;
            }
        });
        const addPlaceIns = addPlace.create();
        this.scene.add(addPlaceIns);

        // light.position.set(1, 2, 1);
        // serverIns.position.set(0, .05, 0);

        const ambientLight = new THREE.AmbientLight(0xffffff, .5);

        const sunlight = new THREE.DirectionalLight(0xffffff, 1); // 색상과 강도 설정
        sunlight.position.set(5, 10, 5); // 태양 위치 설정
        sunlight.castShadow = true; // 그림자 활성화

        // Shadow settings for sunlight
        sunlight.shadow.mapSize.width = 1024; // 그림자 해상도 (넓게 하면 더 부드러움)
        sunlight.shadow.mapSize.height = 1024;
        sunlight.shadow.camera.near = 0.5; // 그림자 카메라 설정
        sunlight.shadow.camera.far = 50;
        sunlight.shadow.camera.left = -10;
        sunlight.shadow.camera.right = 10;
        sunlight.shadow.camera.top = 10;
        sunlight.shadow.camera.bottom = -10;
        
        this.scene.add(ambientLight);
        this.scene.add(sunlight);
        // this.scene.add(floor);


        this.camera.position.set(0, 0, 10);
        // this.camera.lookAt(serverIns.getObjectByName("lighta")!.position);

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        window.addEventListener("click", (e) => {
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
          
            // 카메라 기준으로 광선을 쏨
            raycaster.setFromCamera(mouse, this.camera);
          
            // 씬 내에서 클릭 감지할 대상들 (Mesh 배열 또는 그룹)
            const intersects = raycaster.intersectObjects(this.scene.children, true);
          
            // 교차된 오브젝트가 있다면 처리
            if (intersects.length > 0) {
                const b: any = intersects.filter(data => !(data.object instanceof THREE.AxesHelper) && !(data.object instanceof THREE.GridHelper) && data.object.name == "server");
              // 예: 색상 변경
            }
        });
    }
    clear(): void {
    }
}

export default DefaultPage;

