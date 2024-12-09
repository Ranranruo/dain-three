import * as THREE from "three";
import Component, { ComponentArgs } from "../Component";

interface RackServerComponentArgs extends ComponentArgs {
    secondLightColor?: number;
};

class RackServerComponent extends Component {
    protected mainColor: number;
    private secondLightColor: number;

    public constructor(args: RackServerComponentArgs) {
        super();
        this.mainColor = args.mainColor;
        this.secondLightColor = args.secondLightColor ?? 0x02cff7;
    }
    public create(): THREE.Group {
        const rackServer: THREE.Group = new THREE.Group();

        const body = this.getBody();
        const lightGroup = this.getLightsGroup(.35, 8, [5]);

        lightGroup.position.set(.20, 0, .25)

        rackServer.add(body);
        rackServer.add(lightGroup);
        return rackServer;
    }
    public getBody(): THREE.Mesh {
        const body: THREE.Mesh = new THREE.Mesh(
            new THREE.BoxGeometry(.7, .1, .5),
            new THREE.MeshStandardMaterial({
                color: this.mainColor,
                metalness: 1,
                roughness: .5,
            }),
        );
        return body;
    }

    /**
     * @param count 1부터 시작
     * @param outIndexes 0 부터 시작
     */
    public getLightsGroup(gap: number, count: number, outIndexes: number[] = []): THREE.Group {
        const lightsGroup: THREE.Group = new THREE.Group();
        let x: number = ((Math.floor(count / 2) * (-gap)) - gap) * 100;
        gap *= 100;
        for(let index = 0; index < count; index++){
            x = x + gap;
            if(outIndexes.includes(index)) continue;
            const lightGroup: THREE.Group = this.getLightGroup();
            lightGroup.position.set(x / 1000, 0, 0);
            lightsGroup.add(lightGroup);
        }       

        return lightsGroup;
    }

    public getLightGroup(): THREE.Group {
        const lightGroup: THREE.Group = new THREE.Group();
        
        const box: THREE.Mesh = new THREE.Mesh(
            new THREE.BoxGeometry(.025, .07, .01),
            new THREE.MeshStandardMaterial({
                color: this.secondLightColor,
                roughness: 1
            })
        );
        
        const light: THREE.PointLight = new THREE.PointLight(this.secondLightColor, .015);

        box.position.set(0, 0, 0);
        light.position.set(0, 0, .01)

        lightGroup.add(box);
        lightGroup.add(light);
        return lightGroup;
    }
    public clear(): void {
    }
    
}

export default RackServerComponent;

