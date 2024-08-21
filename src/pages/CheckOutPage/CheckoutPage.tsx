import { NavLink } from 'react-router-dom';

export function CheckOutPage() {
  return (
    <div className="mx-auto max-w-7xl bg-page p-4">
      <div className="h-screen flex flex-col divide-x">
        <NavLink to="/" end>
          ← Back to menu
        </NavLink>
      </div>
    </div>
  );
}
