import Image from "next/image";
import styles from "./UserApi.module.scss";
import React, { useEffect, useState } from "react";

const UserApi = () => {
  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.UserApi}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.users}>
          {users.map((user) => (
            <li key={user.id} className={styles.user__card}>
              <div className={styles.user__content__header}>
                <div className={styles.user__content__curriculum}>
                  <div className={styles.user__content__names}>
                    <Image
                      alt="mamamaamam"
                      src="/user-circle.svg"
                      width={150}
                      height={150}
                      className={styles.user__perfil__image}
                    />
                    <h3 className={styles.user__name}>{user.username}</h3>
                    <span className={styles.user__username}>{user.name}</span>
                  </div>
                  <p className={styles.q}>{user.company.catchPhrase}</p>
                </div>
              </div>
              <div className={styles.user__info}>
                <div className={styles.user__info__content}>
                  <div className={styles.user__content__email}>
                    <a href={`mailto:${user.email}`} className={styles.q}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className={styles.q}
                        width={20}
                        height={20}
                      >
                        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
                        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
                      </svg>
                      Email: {user.email}
                    </a>
                  </div>
                  <div className={styles.user__content__phone}>
                    <a href={`tel:${user.phone}`} className={styles.q}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className={styles.q}
                        width={20}
                        height={20}
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                          clipRule="evenodd"
                          width={20}
                          height={20}
                        ></path>
                      </svg>
                      Call: {user.phone}
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserApi;
