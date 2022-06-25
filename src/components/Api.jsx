import { createContext, useState, useEffect } from "react";
import "../index.css";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);
function Api() {
  const [theme, setTheme] = useState(localStorage.getItem("theme" || "light"));
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_start=0&_limit=10")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
        // Bu da yapılabilir setLoading yerine
        // .catch((e) => console.log(e))
        // .finally(() => setIsLoading(false))
      });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        <div className="text-center">
          <label htmlFor="">
            {theme === "light" ? "Light Mode " : "Dark Mode "}
          </label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "light"} />
          <h1 className="text-8xl my-8">API USERS</h1>
        </div>
        <div className="flex justify-between flex-col sm:flex-row">
          <div className="container flex flex-col mx-auto w-full items-center justify-center">
            <ul className="flex flex-col">
              <li className="border-gray-400 flex flex-row mb-2">
                <div className="shadow border select-none   rounded-md flex flex-1 items-center p-4">
                  <div className="flex flex-col w-10 h-10 justify-center items-center mr-4"></div>
                  <div className="flex-1 pl-1 md:mr-16">
                    <div className="text-xl">
                      {isLoading && <div>Yükleniyor...</div>}
                      {users.map((user) => (
                        <div key={user.id}>{user.id + ": " + user.name}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="container flex flex-col mx-auto w-full items-center justify-center">
            <ul className="flex flex-col">
              <li className="border-gray-400 flex flex-row mb-2">
                <div className="shadow border select-none   rounded-md flex flex-1 items-center p-4">
                  <div className="flex flex-col w-10 h-10 justify-center items-center mr-4"></div>
                  <div className="flex-1 pl-1 md:mr-16">
                    <div className="text-xl">
                      {isLoading && <div>Yükleniyor...</div>}
                      {users.map((user) => (
                        <div key={user.id}>{user.id + ": " + user.name}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="container flex flex-col mx-auto w-full items-center justify-center">
            <ul className="flex flex-col">
              <li className="border-gray-400 flex flex-row mb-2">
                <div className="shadow border select-none   rounded-md flex flex-1 items-center p-4">
                  <div className="flex flex-col w-10 h-10 justify-center items-center mr-4"></div>
                  <div className="flex-1 pl-1 md:mr-16">
                    <div className="text-xl">
                      {isLoading && <div>Yükleniyor...</div>}
                      {users.map((user) => (
                        <div key={user.id}>{user.id + ": " + user.name}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="container flex flex-col mx-auto w-full items-center justify-center mt-8">
          <ul className="flex flex-col">
            <li className="border-gray-400 flex flex-row mb-2">
              <div className="shadow border select-none   rounded-md flex flex-1 items-center p-4">
                <div className="flex flex-col w-10 h-10 justify-center items-center mr-4"></div>
                <div className="flex-1 pl-1 md:mr-16">
                  <div className="text-xl">
                    {isLoading && <div>Yükleniyor...</div>}
                    {users.map((user) => (
                      <div key={user.id}>{user.id + ": " + user.name}</div>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default Api;
