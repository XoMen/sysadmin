import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { selectColorScheme } from "@/stores/colorSchemeSlice";
import {
  setColorScheme,
  colorSchemes,
  ColorSchemes,
} from "@/stores/colorSchemeSlice";
import { useLocation } from "react-router-dom";
import { selectTheme, setTheme, themes, Themes } from "@/stores/themeSlice";
import { setPageLoader } from "@/stores/pageLoaderSlice";
import { Slideover } from "@/components/Base/Headless";
import Lucide from "@/components/Base/Lucide";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { themeLocalisition } from "@/utils/helper";

const SettingsPanel = () => {
  const dispatch = useAppDispatch();
  const activeColorScheme = useAppSelector(selectColorScheme);
  const activeTheme = useAppSelector(selectTheme);
  const [tempActiveColorScheme, setTempActiveColorScheme] =
    useState(activeColorScheme);
  const [tempActiveTheme, setTempActiveTheme] = useState(activeTheme);
  const [themeSwitcherSlideover, setThemeSwitcherSlideover] = useState(false);

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const setColorSchemeClass = () => {
    const el = document.querySelectorAll("html")[0];
    el.setAttribute("class", activeColorScheme);
  };

  const switchColor = (colorScheme: ColorSchemes) => {
    dispatch(setPageLoader(true));
    setTempActiveColorScheme(colorScheme);
    setThemeSwitcherSlideover(false);

    setTimeout(() => {
      dispatch(setColorScheme(colorScheme));

      setTimeout(() => {
        dispatch(setPageLoader(false));
      }, 500);
    }, 500);
    localStorage.setItem("colorScheme", colorScheme);
    setColorSchemeClass();
  };

  setColorSchemeClass();

  const switchTheme = (theme: Themes["name"]) => {
    dispatch(setPageLoader(true));
    setTempActiveTheme(theme);
    setThemeSwitcherSlideover(false);

    setTimeout(() => {
      dispatch(setTheme(theme));

      setTimeout(() => {
        dispatch(setPageLoader(false));
      }, 500);
    }, 500);
    localStorage.setItem("theme", theme);
  };

  const imageAssets = import.meta.glob<{
    default: string;
  }>("/src/assets/images/themes/*.{jpg,jpeg,png,svg}", { eager: true });

  useEffect(() => {
    if (queryParams.get("theme")) {
      const selectedTheme = themes.find(
        (theme) => theme.name === queryParams.get("theme")
      );

      if (selectedTheme) {
        switchTheme(selectedTheme.name);
      }
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col">
        <div className="px-8 pt-6 pb-8">
          <div className="text-base font-medium">قالب‌ها</div>
          <div className="text-slate-500 mt-0.5">
            قالب‌های خود را انتخاب کنید
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 mt-5 gap-y-3.5 gap-x-5">
            {themes.map((theme, themeKey) => (
              <div key={themeKey}>
                <div
                  onClick={() => switchTheme(theme.name)}
                  className={clsx([
                    "h-28 cursor-pointer bg-slate-50 box p-1",
                    tempActiveTheme == theme.name &&
                      "border-2 border-theme-1/60",
                  ])}
                >
                  <div className="w-full h-full overflow-hidden rounded-md">
                    {imageAssets[
                      `/src/assets/images/themes/${theme.name}.png`
                    ] !== undefined && (
                      <img
                        className="w-full h-full"
                        src={
                          imageAssets[
                            `/src/assets/images/themes/${theme.name}.png`
                          ].default
                        }
                      />
                    )}
                  </div>
                </div>
                <div className="mt-2.5 text-slate-400 capitalize text-center text-xs">
                  {themeLocalisition(theme.name)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-b border-dashed"></div>
        <div className="px-8 pt-6 pb-8">
          <div className="text-base font-medium">طرح‌های رنگی</div>
          <div className="text-slate-500 mt-0.5">
            طرح‌های رنگی خود را انتخاب کنید
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-x-4 gap-y-3.5 mt-5">
            {colorSchemes.map((colorScheme, colorKey) => (
              <div key={colorKey}>
                <div
                  onClick={() => switchColor(colorScheme)}
                  className={clsx([
                    "h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80",
                    tempActiveColorScheme == colorScheme &&
                      "border-2 border-theme-1/60",
                  ])}
                >
                  <div className="h-full overflow-hidden rounded-full">
                    <div className="flex items-center h-full gap-1 -mx-2">
                      <div
                        className={clsx([
                          "w-1/2 h-[140%] bg-theme-1 rotate-12",
                          colorScheme,
                        ])}
                      ></div>
                      <div
                        className={clsx([
                          "w-1/2 h-[140%] bg-theme-2 rotate-12",
                          colorScheme,
                        ])}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div>
            <div className="text-base font-medium">Scheme</div>
            <div className="text-slate-400 mt-0.5">
              Choose light or dark mode
            </div>
            <div className="grid grid-cols-3 gap-4 mt-5">
              <div>
                <div className="h-12 rounded-full cursor-pointer bg-slate-50 box"></div>
                <div className="mt-2.5 capitalize text-center text-xs">
                  Light Mode
                </div>
              </div>
              <div>
                <div className="h-12 rounded-full cursor-pointer bg-slate-50 box"></div>
                <div className="mt-2.5 capitalize text-center text-xs">
                  Dark Mode
                </div>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default SettingsPanel;
