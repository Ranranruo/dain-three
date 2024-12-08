import * as THREE from "three";
import Entity from "./Entity";
import ServerRackComponent from "../component/server/ServerRackComponent";
import RackServerComponent from "../component/server/RackServerComponent";

class ServerEntity extends Entity{
    
    create = (): THREE.Group => {
        const server = new THREE.Group();
        const serverRack = new ServerRackComponent({
            mainColor: 0x111111,
            subColor: 0xffffff,
        });
        const rackServer = new RackServerComponent({
            mainColor: 0xc0c0c0
        })
        // server.add(serverRack.create());
        
        return server;
    }
    clear(): void {
        throw new Error("Method not implemented.");
    }
}

export default ServerEntity;