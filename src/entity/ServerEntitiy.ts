import * as THREE from "three";
import Entity from "./Entity";
import ServerRackComponent from "../component/server/ServerRackComponent";

class ServerEntity extends Entity{
    
    create = (): THREE.Group => {
        const server = new THREE.Group();
        
        const serverRack = new ServerRackComponent({
            mainColor: 0x111111,
            subColor: 0xffffff,
        });
        
        

        server.add(serverRack.craete());
        return server;
    }
    clear(): void {
        throw new Error("Method not implemented.");
    }
}

export default ServerEntity;