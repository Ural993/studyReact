type DigitalClockViewType = {
    date: Date
}
export const DigitalClockView = ({date}: DigitalClockViewType) => {
    console.log('DigitalClockView')
    const get2string = (num: number) => num < 10 ? '0' + num : num
    return (
        <>   <span>{get2string(date.getHours())}</span>
            :<span>{get2string(date.getMinutes())}</span>
            :<span>{get2string(date.getSeconds())}</span></>
    )
}