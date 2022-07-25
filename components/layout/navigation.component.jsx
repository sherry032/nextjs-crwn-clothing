import { Fragment } from "react"
import Link from 'next/link'
import { useSelector } from "react-redux"
import { selectCurrentUser} from "../../store/user/user.selector"
import { selectShowCart } from "../../store/cart/cart.selector"
import {signOutUser} from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import Image from "next/image"
import { userActions } from "../../store/user/userSlice"
import { useDispatch } from "react-redux"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { signOut } from "next-auth/react"
import classes from "./navigation.module.scss"

const Navigation =()=>{
  // const currentUser = useSelector(selectCurrentUser)
  const showCart = useSelector(selectShowCart)
  const { data: session, status } = useSession()
  const signOutHanlder = ()=>{
    signOut()
  }

    return(
      <Fragment>
        <div className={classes.navigation}>
            <Link href="/">
              <a>
              <Image className={classes.log} src="/crown.svg" width="70px" height="70px" alt="crown clothing logo"/>
              </a>
            </Link>
            <div className={classes["nav-links-container"]}>
                <Link href="/shop" ><a className={classes["nav-link"]}>SHOP</a></Link>
                {session ? <span className={classes["nav-link"]} onClick={signOutHanlder}>SIGN OUT</span>:<Link href="/auth" ><a className={classes["nav-link"]}>SIGN IN</a></Link>}
                <CartIcon/>
            </div>
            {showCart && <CartDropdown />}
        </div>
      </Fragment>
    )
  }

  export default Navigation