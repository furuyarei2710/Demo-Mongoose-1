import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdFormatColorFill } from "react-icons/md";
import { AiOutlinePlus } from 'react-icons/ai'
import { useRouter } from "next/router";
import Header from "../src/components/NavigationBar";
import { BrowserRouter, Routes } from "react-router-dom";
import NavigationBar from "../src/components/NavigationBar";
import fetchUsers from "./fetching";
// import users from './fetching'

export default function Home() {
  // return <><NavigationBar /></>
  console.log(JSON.stringify(fetchUsers()))
  return <p>{JSON.stringify(fetchUsers())}</p>
}


