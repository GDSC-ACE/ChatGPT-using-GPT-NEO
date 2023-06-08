import useDarkMode from '../hooks/useDarkMode';
import { Box, Text } from "@chakra-ui/react";
import { MdOutlineNightlight, MdOutlineWbSunny } from 'react-icons/md';

/**
 * A toggle for switching between light and dark modes.
 *
 * @param {Object} props - The properties for the component.
 * @param {boolean} props.open - Whether the sidebar is open or not.
 */
const DarkMode = (props) => {
  const [darkTheme, setDarkTheme] = useDarkMode();

  // Toggles the dark mode. 
  const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <Box className="nav">
        <Text className="nav__item" onClick={handleMode}>
          {darkTheme ? (
            <>
              <Box className="nav__icons">
                <MdOutlineWbSunny />
              </Box>
              <Text className={`${!props.open && "hidden"}`}>Light mode</Text>
            </>
          ) : (
            <>
              <Box className="nav__icons">
                <MdOutlineNightlight />
              </Box>
              <Text className={`${!props.open && "hidden"}`}>Night mode</Text>
            </>
          )}
        </Text>
      </Box>
    );
}

export default DarkMode;