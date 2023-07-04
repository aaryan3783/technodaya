'use client'
import Alert, { AlertsWrapper } from "@/components/alert";
import { createContext, useState, useContext, useRef } from "react";

const AlertsContext = createContext();
const Provider = ({ children }) => {
  const [alerts, setAlerts] = useState([]); // [ { id, message, type, timeout }, ... ]
  const alertsRef = useRef([]);
  const addAlert = (message, type, timeout = null) => {
    const id = new Date().getTime().toString();
    timeout = timeout || (type === 'error' ? 10000 : 5000);
    alertsRef.current = [{ id, message, type, timeout }, ...alertsRef.current];
    setAlerts(alertsRef.current);
    return id;
  };
  const removeAlert = (id) => {
    alertsRef.current = alertsRef.current.filter((alert) => alert.id !== id);
    setAlerts(alertsRef.current);
  };

  return (
    <AlertsContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {children}
    </AlertsContext.Provider>
  )
};

const Alerts = () => {
  const { alerts, removeAlert } = useContext(AlertsContext);

  return (
    <AlertsWrapper>
      {alerts.map((alert) => (
        <Alert key={alert.id} severity={alert.type}
          timeout={alert.timeout}
          message={alert.message}
          handleDismiss={() => { removeAlert(alert.id) }} />
      ))}
    </AlertsWrapper>
  )
}

const useAlerts = () => useContext(AlertsContext);

export { Alerts, Provider, useAlerts };
export default Provider;