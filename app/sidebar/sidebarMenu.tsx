import { SvgIconProps } from "@mui/material";


interface Props {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    text: string
    active?: boolean
}

const SidebarMenu = ({Icon, text, active}: Props) => {
    return (
      <div className="hoverEffect flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-3">
        <Icon className="h-7" />
        <span className={`${active && "font-bold"} hidden xl:inline`}>{text}</span>
      </div>
    );
  }

  export default SidebarMenu