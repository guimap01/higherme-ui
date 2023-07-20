import { colors } from '@higherme-ui/tokens';

import { resolveColor } from '../../helpers/colors';
import {
  AddCircle,
  Alert,
  ArrowCircleLeft,
  ArrowCircleUp,
  ArrowLeft,
  ArrowUp,
  Bell,
  Camera,
  Chat,
  Checkmark,
  CheckmarkCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleList,
  Close,
  Copy,
  CrossCircle,
  Download,
  Edit1,
  Email,
  ExternalLink,
  Eye,
  Facebook,
  Filters,
  FloppyDisk,
  FourK,
  Gear,
  Info,
  Invoice,
  List,
  Mail,
  Menu,
  MinusCircle,
  MoreMenu,
  NotePad,
  Notifications,
  OrderDown,
  OrderUp,
  Pencil,
  Phone,
  Pin1,
  Printer,
  QuestionCircle,
  Search,
  Send,
  SignIn,
  Square,
  SquareCheck,
  Star,
  TextFile,
  Trash,
  Upload,
  UserCircle,
  VerticalDots,
  XCircle,
  XEye,
} from './vectors';

const viewBoxObj = {
  addCircle: '0 0 24 24',
  arrowUp: '0 0 14 16',
  arrowCircleLeft: '0 0 20 20',
  arrowCircleUp: '0 0 20 20',
  arrowLeft: '0 0 16 14',
  alert: '0 0 22 20',
  bell: '0 0 24 24',
  camera: '0 0 22 18',
  chat: '0 0 22 18',
  checkmark: '0 0 18 14',
  checkmarkCircle: '0 0 20 20',
  chevronDown: '0 0 24 24',
  chevronLeft: '0 0 6 10',
  chevronRight: '0 0 6 10',
  chevronUp: '0 0 24 24',
  circleList: '0 0 24 24',
  close: '0 0 14 14',
  download: '0 0 18 16',
  copy: '0 0 18 18',
  crossCircle: '0 0 18 18',
  fourK: '0 0 24 24',
  gear: '0 0 18 18',
  edit1: '0 0 24 24',
  email: '0 0 20 16',
  externalLink: '0 0 19 19',
  eye: '0 0 24 24',
  facebook: '0 0 24 24',
  filters: '0 0 20 20',
  floppyDisk: '0 0 20 20',
  info: '0 0 24 24',
  invoice: '0 0 20 20',
  list: '0 0 20 20',
  mail: '0 0 20 16',
  menu: '0 0 24 24',
  moreMenu: '0 0 4 18',
  notePad: '0 0 20 20',
  minusCircle: '0 0 20 20',
  notifications: '0 0 24 24',
  phone: '0 0 20 20',
  orderDown: '0 0 8 4',
  orderUp: '0 0 8 4',
  pencil: '0 0 16 18',
  pin1: '0 0 24 24',
  printer: '0, 0, 20, 20',
  questionCircle: '0 0 24 24',
  search: '0 0 24 24',
  send: '0 0 20 20',
  signIn: '0 0 20 20',
  square: '0 0 20 20',
  squareCheck: '0 0 20 20',
  star: '0 0 20 20',
  textFile: '0 0 16 20',
  trash: '0 0 24 24',
  userCircle: '0 0 24 24',
  upload: '0 0 24 24',
  verticalDots: '0 0 4 18',
  xCircle: '0 0 20 20',
  xEye: '0 0 24 24',
};

const iconTypes = (color: string) => ({
  addCircle: <AddCircle color={color} />,
  arrowUp: <ArrowUp color={color} />,
  arrowCircleLeft: <ArrowCircleLeft color={color} />,
  arrowCircleUp: <ArrowCircleUp color={color} />,
  arrowLeft: <ArrowLeft color={color} />,
  alert: <Alert color={color} />,
  bell: <Bell color={color} />,
  camera: <Camera color={color} />,
  chat: <Chat color={color} />,
  checkmark: <Checkmark color={color} />,
  checkmarkCircle: <CheckmarkCircle color={color} />,
  chevronDown: <ChevronDown color={color} />,
  chevronLeft: <ChevronLeft color={color} />,
  chevronRight: <ChevronRight color={color} />,
  chevronUp: <ChevronUp color={color} />,
  circleList: <CircleList color={color} />,
  close: <Close color={color} />,
  download: <Download color={color} />,
  copy: <Copy color={color} />,
  crossCircle: <CrossCircle color={color} />,
  edit1: <Edit1 color={color} />,
  email: <Email color={color} />,
  externalLink: <ExternalLink color={color} />,
  eye: <Eye color={color} />,
  facebook: <Facebook color={color} />,
  filters: <Filters color={color} />,
  floppyDisk: <FloppyDisk color={color} />,
  fourK: <FourK color={color} />,
  gear: <Gear color={color} />,
  info: <Info color={color} />,
  invoice: <Invoice color={color} />,
  list: <List color={color} />,
  mail: <Mail color={color} />,
  menu: <Menu color={color} />,
  moreMenu: <MoreMenu color={color} />,
  notePad: <NotePad color={color} />,
  minusCircle: <MinusCircle color={color} />,
  notifications: <Notifications color={color} />,
  phone: <Phone color={color} />,
  orderDown: <OrderDown color={color} />,
  orderUp: <OrderUp color={color} />,
  pencil: <Pencil color={color} />,
  pin1: <Pin1 color={color} />,
  printer: <Printer color={color} />,
  questionCircle: <QuestionCircle color={color} />,
  search: <Search color={color} />,
  send: <Send color={color} />,
  signIn: <SignIn color={color} />,
  square: <Square color={color} />,
  squareCheck: <SquareCheck color={color} />,
  star: <Star color={color} />,
  textFile: <TextFile color={color} />,
  trash: <Trash color={color} />,
  userCircle: <UserCircle color={color} />,
  upload: <Upload color={color} />,
  verticalDots: <VerticalDots color={color} />,
  xCircle: <XCircle color={color} />,
  xEye: <XEye color={color} />,
});

export type IconNames = keyof typeof viewBoxObj;

export const iconNames = Object.keys(viewBoxObj) as IconNames[];

type IconSvgProps = {
  className?: string;
  name: keyof typeof viewBoxObj;
  color?: keyof typeof colors;
  height?: number;
  width?: number;
  style?: React.CSSProperties;
  viewBox?: string;
  opacity?: string | number | null;
};

export const IconSvg = ({
  name,
  className,
  color = 'blue100',
  height,
  style,
  viewBox,
  width,
  opacity,
}: IconSvgProps) => {
  return (
    <svg
      className={className}
      height={height}
      width={width}
      viewBox={viewBox || viewBoxObj[name]}
      id={`${name}-icon`}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      {/* @ts-ignore */}
      {iconTypes(resolveColor(color, opacity))[name]}
    </svg>
  );
};
