import { Container } from "@chakra-ui/react";
import type { NextPage } from 'next'
import Image from 'next/image'
import { AdminLayout } from '@layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Auth from "../../components/Auth";
// import '../../styles/custom.css'
import AddTodo from "../../components/AddTodo";
import AddTodoCard from "../../components/AddTodoCard";
import InProcessCard from "../../components/InProcessCard";
import InReviewCard from "../../components/InReviewCard";
import CompletedCard from "../../components/CompletedCard";
import {
  faArrowDown,
  faArrowUp,
  faDownload,
  faEllipsisVertical,
  faMars,
  faSearch,
  faUsers,
  faVenus,
} from '@fortawesome/free-solid-svg-icons'
import {
  Button, ButtonGroup, Card, Dropdown, ProgressBar,
} from 'react-bootstrap'
import { Bar, Line } from 'react-chartjs-2'
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js'
import {
  faCcAmex,
  faCcApplePay,
  faCcPaypal,
  faCcStripe,
  faCcVisa,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler)

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

const Home: NextPage = () => (
  <AdminLayout>

    <Container maxW="7xl">
      {/* <Auth /> */}
      <div className="d-flex justify-content-between">
        <AddTodo />
        <AddTodoCard />
        <InProcessCard />
        <InReviewCard />
        <CompletedCard />
      </div>

      {/* <TodoList /> */}
    </Container>

  </AdminLayout>
)

export default Home
