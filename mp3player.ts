/*
 *	
 */
//% color=#0fbc11 icon="\uf120" block="mp3player"
namespace mp3player {

    /**
     * 
     * @param 
     */
    //% weight=87 blockGap=8
    //% block="serial|send|command %command | hbyte %hbyte | lbyte %lbyte" 
    //% blockId=send_command
    //% icon="\uf120"
    //% shim=mp3player::sendCommand
    export function sendCommand(command: number, hbyte: number, lbyte: number): void {
        
    }
}