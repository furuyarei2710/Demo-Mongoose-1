import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdFormatColorFill } from "react-icons/md";
import { AiOutlinePlus } from 'react-icons/ai'
import { useRouter } from "next/router";
import Header from "../src/components/layouts/Header";
import { BrowserRouter, Routes } from "react-router-dom";

export default function Home({workspaces}) {
  return <><Header /></>
}

export async function getServerSideProps() {
  try {
    let response = await fetch("http://localhost:3000/api/workspace");
    let workspaces = await response.json();
    
    return {
      props: {
        workspaces: JSON.parse(JSON.stringify(workspaces))
      },
    };
  } catch (error) {
    throw new Error(error);
  }
}

