namespace eureka_blocks {



    //% color="#1E90FF" weight=83 block="waittime |%second|" group="1 timecond."
    //% second.min=0 second.max=15
    export function driveForwards(second: number): void {
        basic.pause(second * 1000);
    }

}



