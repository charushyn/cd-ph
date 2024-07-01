'use server'

import {Main} from "@/_pages/index";
import {MainLayout} from "@/build/templates/index";
import { getStaticData } from "@/shared/utils";
import { getLocale } from "next-intl/server";




export default async function App() {
    return (
      <MainLayout>
        <Main></Main>
      </MainLayout>
    );
  }