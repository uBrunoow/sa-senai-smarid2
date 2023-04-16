import './countdown.sass'
import './ts/countdown'

import { MdTimer } from 'react-icons/md'

export default function Countdown() {
    return(
        <main className="countdown">
                <div className="countline">
                    <p className="timing">Termina em:</p> 
                    <MdTimer className="times"/>
                    <div className="countdown-container">
                        <div className="days-c">
                            <p>00</p>
                            <span>:</span>
                        </div>

                        <div className="hours-c">
                            <p>00</p>
                            <span>:</span>
                        </div>

                        <div className="mins-c">
                            <p>00</p>
                            <span>:</span>
                        </div>

                        <div className="secs-c">
                            <p>00</p>
                        </div>
                    </div>
                </div>
        </main>
    )
}