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
        <div>
            <h1>You are browsing on {onSmallScreen ? 'Small':'Large'} device</h1>
        </div>
    )
}