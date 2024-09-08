import {List,Users,Airplay,File,Home, Circle,BookOpen,Book,Award,Edit,Columns } from "react-feather";

export default [
  {
    id: "home",
    title: "داشبورد",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  {
    id: "Users",
    title: " کاربران",
    icon: <Users size={20} />,
    navLink: "/AllUserTab1"
  },
  {
    id: "Curses",
    title: " دوره ها",
    icon: <List size={20} />,
    // navLink: "/sample",
    children: [
      {
        id: "ListCurses",
        title: "لیست دوره ها",
        color:'success',
        icon: <BookOpen size={25} />,
        navLink: "/Curses/ListCurses",
      },
      {
        id: "ListCursesUser",
        title: "لیست دوره های شما",
        icon: <Book size={25} />,
        navLink: "/Curses/ListCursesUser",
      },
      {
        id: "SelectionListCursesUse",
        title: "دوره های رزرو شده",
        icon: <Award size={25} />,
        navLink: "/Curses/SelectionListCursesUse",
      },
      {
        id: "CreatNewCurses",
        title: "ساخت دوره جدید",
        icon: <Edit size={25} />,
        navLink: "/Curses/CreatNewCurses",
      },
    ],
  },
  {
    id: "NewsPage",
    title: " اخبار ",
    icon: <Airplay size={20} />,
    navLink: "/NewsPage",
    children: [
      {
        id: "NewsList",
        title: "لیست اخبار",
        icon: <Columns size={20} />,
        navLink: "/NewsPage/NewsList",
      },
      {
        id: "NewsCreatnew",
        title: "ایجاد خبر جدید",
        icon: <Columns size={20} />,
        navLink: "/NewsPage/NewsCreatnew",
      },
      {
        id: "NewsCategory",
        title: "دسته بندی خبر",
        icon: <Columns size={20} />,
        navLink: "/NewsPage/NewsCategory",
      },
    ],
  },
];
