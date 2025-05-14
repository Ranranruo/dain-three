import * as THREE from "three";
import Page from "./Page";
import Floor from "../staticObject/Floor";
import AddPlace from "../entity/AddPlace";

// 서버 데이터 (예시)
let initServer = [
  { id: 1, clicked: false, x: 0, y: 0, z: 0 },
  { id: 2, clicked: false, x: 1, y: 0, z: 0 },
  { id: 3, clicked: false, x: 2, y: 0, z: 0 },
  { id: 4, clicked: false, x: -1, y: 0, z: 0 },
  { id: 5, clicked: false, x: -2, y: 0, z: 0 },
  { id: 6, clicked: false, x: 0, y: 0, z: -1 },
  { id: 7, clicked: false, x: 1, y: 0, z: -1 },
  { id: 8, clicked: false, x: 2, y: 0, z: -1 },
  { id: 9, clicked: false, x: -1, y: 0, z: -1 },
  { id: 10, clicked: false, x: -2, y: 0, z: -1 },
  { id: 11, clicked: false, x: 0, y: 0, z: -2 },
  { id: 12, clicked: false, x: 1, y: 0, z: -2 },
  { id: 13, clicked: false, x: 2, y: 0, z: -2 },
  { id: 14, clicked: false, x: -1, y: 0, z: -2 },
  { id: 15, clicked: false, x: -2, y: 0, z: -2 },
  { id: 16, clicked: false, x: 0, y: 0, z: 1 },
  { id: 17, clicked: false, x: 1, y: 0, z: 1 },
  { id: 18, clicked: false, x: 2, y: 0, z: 1 },
  { id: 19, clicked: false, x: -1, y: 0, z: 1 },
  { id: 20, clicked: false, x: -2, y: 0, z: 1 },
  { id: 21, clicked: false, x: 0, y: 0, z: 2 },
  { id: 22, clicked: false, x: 1, y: 0, z: 2 },
  { id: 23, clicked: false, x: 2, y: 0, z: 2 },
  { id: 24, clicked: false, x: -1, y: 0, z: 2 },
  { id: 25, clicked: false, x: -2, y: 0, z: 2 },
];

class DefaultPage extends Page {
  protected camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera();
  private ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  private sunlight = new THREE.DirectionalLight(0xffffff, 1);
  constructor() {
    super();

    // 빛 설정

    // 클릭 이벤트
    this.render();
  }

  clear(): void {
    this.scene.remove(this.ambientLight);
    this.scene.remove(this.sunlight);
  }
  render(): void {
    this.clear();
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.sunlight = new THREE.DirectionalLight(0xffffff, 1);
    this.sunlight.position.set(5, 10, 5);
    this.sunlight.castShadow = true;
    this.sunlight.shadow.mapSize.set(1024, 1024);
    this.sunlight.shadow.camera.near = 0.5;
    this.sunlight.shadow.camera.far = 50;
    this.sunlight.shadow.camera.left = -10;
    this.sunlight.shadow.camera.right = 10;
    this.sunlight.shadow.camera.top = 10;
    this.sunlight.shadow.camera.bottom = -10;

    this.scene.add(this.ambientLight);
    this.scene.add(this.sunlight);
    // this.scene.add(floor);

    this.camera.position.set(0, 0, 10);

    const raycaster = new THREE.Raycaster();
    const floor = new Floor().create();
    floor.position.set(0, -0.05, 0);

    // initServer 배열 기반 서버 생성
    initServer.forEach(({ id, clicked, x, y, z }) => {
      const addPlace = new AddPlace({
        id,
        clicked,
        onClick: () => console.log(`Clicked server ${id}`),
      });

      addPlace.create().then((group) => {
        group.name = "server"; // 클릭 감지용 이름 설정
        group.position.set(x, y, z); // 좌표 설정
        this.scene.add(group);
      });
    });
    const mouse = new THREE.Vector2();

    window.addEventListener("click", (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, this.camera);

      const intersects = raycaster.intersectObjects(this.scene.children, true);
      if (intersects.length > 0) {
        const clickedServer = intersects.find(
          (data) =>
            !(data.object instanceof THREE.AxesHelper) &&
            !(data.object instanceof THREE.GridHelper)
        );
        if (clickedServer) {
          // clickedServer.object.name이 server ID와 일치하는 데이터 찾기
          const serverData = initServer.find(
            (data) => `${data.id}` === clickedServer.object.name
          );

          if (serverData) {
            // clicked 값을 토글
            serverData.clicked = !serverData.clicked;
          }
        }
      }
    });
  }
}

export default DefaultPage;
