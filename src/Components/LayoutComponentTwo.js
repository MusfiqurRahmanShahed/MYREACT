import useWindowWidth from "../Hooks/useWindowWidth";
export default function LayoutComponentsOne(){
    // const [onSmallScreen, setOnSmallScreen] = useState(false);
    // const handleResize = () => {
    //     if (window.innerWidth < 768) {
    //         setOnSmallScreen(true);
    //     } else {
    //         setOnSmallScreen(false);
    //     }
    // };
    // useEffect(() => {
    //     handleResize();
    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };

    // },[]);

    const {onSmallScreen}= useWindowWidth();
    
    return (
        <div className={onSmallScreen ? 'Small':'Large'}>
            <h1>This is another Layout </h1>
        </div>
    )
}