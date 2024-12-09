import * as THREE from "three";
import Entity from "./Entity";
import ServerRackComponent from "../component/server/ServerRackComponent";
import RackServerComponent from "../component/server/RackServerComponent";

class ServerEntity extends Entity{
    
    create = (): THREE.Group => {
        const serverEntitiy = new THREE.Group();
        
        const serverRackComponent = new ServerRackComponent({
            mainColor: 0x111111,
            subColor: 0xffffff,
        });

        const rackServerComponent = new RackServerComponent({
            mainColor: 0x555555
        });

        const serverRack = serverRackComponent.create();
        const rackServer = rackServerComponent.create();
        
        serverEntitiy.add(rackServer);
        return serverEntitiy;
    }
    clear(): void {
        throw new Error("Method not implemented.");
    }
}

export default ServerEntity;