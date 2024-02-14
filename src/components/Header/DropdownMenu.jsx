import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Menu as BaseMenu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem } from "@mui/base/MenuItem";
import { Dropdown } from "@mui/base/Dropdown";
import { useTheme } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

function useIsDarkMode() {
  const theme = useTheme();
  return theme.palette.mode === "dark";
}

export default function DropdownMenu() {
  // Replace this with your app logic for determining dark mode
  const isDarkMode = useIsDarkMode();

  const navItems = [
    {
      name: "Depression Test",
      slug: "/depression-test",
      active: true,
    },
    {
      name: "Mental Health Test",
      slug: "/mental-health-test",
      active: true,
    },
    {
      name: "Anger Management Test",
      slug: "/anger-management-test",
      active: true,
    },
    {
      name: "Self Esteem Test",
      slug: "/self-esteem-test",
      active: true,
    },
    {
      name: "Anxiety Test",
      slug: "/anxiety-test",
      active: true,
    },
  ];
  return (
    <div className="bg-[#009A80]">
      <Dropdown>
        <MenuButton>
          <MenuIcon />
        </MenuButton>
        <Menu>
          <ul className="font-medium flex flex-col p-4">
            {navItems.map((item) =>
              item.active ? (
                <MenuItem key={item.name}>
                  <NavLink
                    to={item.slug}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? " text-white " : ""
                    }
                  >
                    {item.name}
                  </NavLink>
                  <br />
                  <hr />
                </MenuItem>
              ) : null
            )}
          </ul>
        </Menu>
      </Dropdown>
    </div>
  );
}

const resolveSlotProps = (fn, args) =>
  typeof fn === "function" ? fn(args) : fn;

const Menu = React.forwardRef((props, ref) => {
  // Replace this with your app logic for determining dark modes
  const isDarkMode = useIsDarkMode();

  return (
    <BaseMenu
      ref={ref}
      {...props}
      slotProps={{
        ...props.slotProps,
        root: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.root,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              `${isDarkMode ? "dark" : ""} z-10`,
              resolvedSlotProps?.className
            ),
          };
        },
        listbox: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.listbox,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              "text-sm font-sans p-1.5 my-3 mx-0 rounded-xl overflow-auto outline-0   min-w-listbox shadow-md bg-[#009A80] text-white font-semibold",
              resolvedSlotProps?.className
            ),
          };
        },
      }}
    />
  );
});

Menu.propTypes = {
  /**
   * The props used for each slot inside the Menu.
   * @default {}
   */
  slotProps: PropTypes.shape({
    listbox: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  }),
};

const MenuButton = React.forwardRef((props, ref) => {
  const { className, ...other } = props;
  return (
    <BaseMenuButton
      ref={ref}
      className={clsx(
        "cursor-pointer text-sm font-sans box-border rounded-lg font-semibold px-4 py-2 shadow-sm",
        className
      )}
      {...other}
    />
  );
});

MenuButton.propTypes = {
  /**
   * Class name applied to the root element.
   */
  className: PropTypes.string,
};

const MenuItem = React.forwardRef((props, ref) => {
  const { className, ...other } = props;
  return (
    <BaseMenuItem
      ref={ref}
      className={clsx(
        "list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0",
        className
      )}
      {...other}
    />
  );
});

MenuItem.propTypes = {
  className: PropTypes.string,
};
