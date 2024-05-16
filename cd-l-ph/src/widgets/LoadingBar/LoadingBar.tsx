const LoadingBar = () => {
    return (
        <div className="absolute w-full h-full z-[100] bg-black flex items-center justify-center">
            <div className={`lds-facebook`}><div></div><div></div><div></div></div>
        </div>
        
    )
}

export default LoadingBar;