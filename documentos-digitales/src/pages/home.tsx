import Home from '../components/organisms/Home'
import Layout from "@/components/templates/MainLayout";
import { NextPage } from "next";

interface Props {
    title?: string
}

const HomePage: NextPage<Props> = () => {
    return (
        <Layout>
            <Home />
        </Layout>
    );
}

export default HomePage;