import { useState } from "react";

function App() {
  const [checkbox, setCheckbox] = useState(true);

  return (
    <div className="text-center text-neutral-grayishblue">
      <Header setCheckbox={setCheckbox} />
      <Cards checkbox={checkbox} />
    </div>
  );
}

function Header({ setCheckbox }) {
  return (
    <>
      <h1 className="text-[32px]">Our Pricing</h1>
      <div className="mt-[32px] flex justify-center gap-[24px] text-neutral-lgrayishblue">
        <span>Annually</span>
        <input
          type="checkbox"
          defaultChecked="true"
          onChange={(e) => setCheckbox(e.target.checked)}
          className="peer absolute hidden h-0 w-0"
          id="switch"
        />
        <label
          className="relative block h-[30px] w-[60px] cursor-pointer rounded-[100px] bg-[#808080] indent-[-9999px] after:absolute after:left-[5px] after:top-[5px] after:h-[20px] after:w-[25px] after:rounded-[90px] after:bg-[#ffff] after:duration-300 peer-checked:bg-[#a3a8f0] peer-checked:after:left-[90%] peer-checked:after:translate-x-[-100%] peer-checked:hover:bg-[#a3a8f0b3]"
          htmlFor="switch"
        >
          Toggle
        </label>
        <span>Monthly</span>
      </div>
    </>
  );
}

// peer-checked:after:left-[100% - 5px] relative block h-[30px] w-[60px] cursor-pointer rounded-[100px] bg-[#808080] indent-[-9999px] after:absolute after:left-[5px] after:top-[5px] after:h-[20px] after:w-[25px] after:rounded-[90px] after:bg-[#ffff] after:duration-300 after:content-none peer-checked:after:translate-x-[-100%] peer-has-[:checked]:bg-[#a3a8f0b3]

function Cards({ checkbox }) {
  const basic = {
    plan: "Basic",
    price: checkbox ? "19.99" : "199.99",
    storage: "500",
    unit: "GB",
    users: "2",
    upload: "3",
  };

  const pro = {
    plan: "Professional",
    price: checkbox ? "24.99" : "249.99",
    storage: "1",
    unit: "T",
    users: "5",
    upload: "10",
  };

  const master = {
    plan: "Master",
    price: checkbox ? "39.99" : "399.99",
    storage: "2",
    unit: "T",
    users: "10",
    upload: "20",
  };

  return (
    <div className="mt-[72px] flex flex-col gap-[20px] desktop:flex-row desktop:justify-center desktop:gap-0">
      <Card plan={basic} />
      <CardPro plan={pro} />
      <Card plan={master} />
    </div>
  );
}

function Card({ plan }) {
  return (
    <div className="rounded-[10px] bg-[#ffff] p-[48px] desktop:min-w-[23.4rem]">
      <h2 className="text-[18px] text-neutral-grayishblue">{plan.plan}</h2>
      <p className="flex items-center justify-center gap-[4px] border-b-[2px] border-solid border-neutral-vlgrayishblue pb-[8px] text-[72px] text-neutral-dgrayishblue">
        <span className="text-[40px]">$</span>
        {plan.price}
      </p>
      <ul className="m-0 mt-[16px] flex list-none flex-col gap-[15px] p-0 indent-0">
        <li className="border-b-[2px] border-solid border-neutral-vlgrayishblue pb-[16px]">
          {plan.storage} {plan.unit} Storage
        </li>
        <li className="border-b-[2px] border-solid border-neutral-vlgrayishblue pb-[16px]">
          {plan.users} Users Allowed
        </li>
        <li className="border-b-[2px] border-solid border-neutral-vlgrayishblue pb-[16px]">
          Send up to {plan.upload} GB
        </li>
      </ul>
      <a className="mt-[32px] block cursor-pointer rounded-[6px] bg-gradient-to-135 p-[12px] text-[13px] uppercase tracking-[1px] text-[#ffff] hover:bg-gradient-to-135-white hover:text-gradients-purple hover:outline hover:outline-1 hover:outline-gradients-purple">
        Learn More
      </a>
    </div>
  );
}

function CardPro({ plan }) {
  return (
    <div className="rounded-[10px] bg-[#ffff] bg-gradient-to-135 p-[48px] desktop:min-w-[23.4rem] desktop:scale-y-[1.08]">
      <h2 className="text-[18px] text-[#ffff]">{plan.plan}</h2>
      <p className="flex items-center justify-center gap-[4px] border-b-[2px] border-solid border-neutral-lgrayishblue pb-[8px] text-[72px] text-[#fff]">
        <span>$</span>
        {plan.price}
      </p>
      <ul className="m-0 mt-[16px] flex list-none flex-col gap-[15px] p-0 indent-0">
        <li className="border-b-[2px] border-solid border-neutral-lgrayishblue pb-[16px] text-[#fff]">
          {plan.storage} {plan.unit} Storage
        </li>
        <li className="border-b-[2px] border-solid border-neutral-lgrayishblue pb-[16px] text-[#fff]">
          {plan.users} Users Allowed
        </li>
        <li className="border-b-[2px] border-solid border-neutral-lgrayishblue pb-[16px] text-[#fff]">
          Send up to {plan.upload} GB
        </li>
      </ul>
      <a className="mt-[32px] block cursor-pointer rounded-[6px] bg-gradient-to-135-white p-[12px] text-[13px] uppercase tracking-[1px] text-gradients-purple hover:bg-gradient-to-135 hover:text-gradients-purple hover:outline hover:outline-1 hover:outline-[#ffff]">
        Learn More
      </a>
    </div>
  );
}

export default App;
