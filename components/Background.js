export default function Background({children, color, opacity, width, height}){
    const params = {
        backgroundColor: color,
        opacity: opacity,
        width: width,
        height: height,
        // zIndex: '6',
        position: 'absolute'
    }
    return <div style={params}>{children}</div>
}