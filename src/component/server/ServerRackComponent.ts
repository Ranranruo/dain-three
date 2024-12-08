import * as THREE from "three";
import Component, { ComponentArgs } from "../Component";


interface ServerRackComponentArgs extends ComponentArgs {
    glassColor?: number;
};

class ServerRackComponent extends Component {
    protected mainColor: number;
    private glassColor: number;

    constructor(args: ServerRackComponentArgs) {
        super();
        this.mainColor = args.mainColor;
        this.glassColor = args.glassColor ?? 0xffffff;
    }

    create(): THREE.Object3D {

        const serverRack: THREE.Group = new THREE.Group();

        const pointLight = new THREE.PointLight(0xffffff, 12);
        pointLight.position.set(0, 2, 0);

        const rack: THREE.Mesh = this.getRack("rack");
        rack.position.set(0, 0, -.025);

        const glass: THREE.Mesh = this.getGlass("glass");
        glass.position.set(0, 0, .465);

        const door: THREE.Group = this.getDoor("door");
        door.position.set(0, 0, .475);


        // serverRack.add(pointLight);
        serverRack.add(rack);
        serverRack.add(glass);
        serverRack.add(door)
        return serverRack;
    }
    private getRack(name: string): THREE.Mesh {
        const rackGeometry: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1.5, .95);
        const rackMaterial: THREE.MeshStandardMaterial = new THREE.MeshStandardMaterial({
            color: this.mainColor,
            metalness: .6,
            roughness: .4
        });
        const rack: THREE.Mesh = new THREE.Mesh(rackGeometry, rackMaterial);
        rack.name = name;
        return rack;
    }

    private getGlass(name: string): THREE.Mesh {
        const glassGeometry: THREE.BoxGeometry = new THREE.BoxGeometry(.8, 1.3, .03);
        const glassMaterial: THREE.MeshStandardMaterial = new THREE.MeshPhysicalMaterial({
            metalness: 0,
            roughness: 1,
            envMapIntensity: 0.9,
            clearcoat: 1,
            transparent: true,
            transmission: .95,
            opacity: 1,
            reflectivity: 0.2,
        });

        const glass: THREE.Mesh = new THREE.Mesh(glassGeometry, glassMaterial);
        glass.name = name;
        return glass;
    }

    private getDoor(name: string): THREE.Group {
        const door: THREE.Group = new THREE.Group();


        const doorTop: THREE.Mesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, .1, .05),
            new THREE.MeshStandardMaterial({
                color: this.mainColor,
                metalness: .6,
                roughness: .4
            })
        );
        doorTop.position.set(0, .7, 0);

        const doorBottom: THREE.Mesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, .1, .05),
            new THREE.MeshStandardMaterial({
                color: this.mainColor,
                metalness: .6,
                roughness: .4
            })
        );
        doorBottom.position.set(0, -.7, 0);

        const doorLeft: THREE.Mesh = new THREE.Mesh(
            new THREE.BoxGeometry(.1, 1.3, .05),
            new THREE.MeshStandardMaterial({
                color: this.mainColor,
                metalness: .6,
                roughness: .4
            })
        );
        doorLeft.position.set(.45, 0, 0);

        const doorRight: THREE.Mesh = new THREE.Mesh(
            new THREE.BoxGeometry(.1, 1.3, .05),
            new THREE.MeshStandardMaterial({
                color: this.mainColor,
                metalness: .6,
                roughness: .4
            })
        );
        doorRight.position.set(-.45, 0, 0);

        door.add(doorBottom);
        door.add(doorTop);
        door.add(doorLeft);
        door.add(doorRight);

        return door;
    }

    clear(): void {
        throw new Error("Method not implemented.");
    }
}
export default ServerRackComponent;