import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const icons = (completed, active) => {
  return {
    1: (
      <SvgIcon viewBox="0 0 200 195" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M117.376 110.282C117.121 110.231 116.862 110.212 116.603 110.223C116.155 110.247 115.717 110.36 115.315 110.557C114.533 110.935 113.928 111.599 113.624 112.411C113.321 113.224 113.342 114.122 113.685 114.919L113.661 114.953L121.37 133.578C128.746 128.871 134.343 121.841 137.276 113.598L117.41 110.24L117.376 110.282ZM86.4648 112.921C86.2977 112.187 85.889 111.53 85.3042 111.056C84.7193 110.582 83.9922 110.317 83.2393 110.305C83.0171 110.302 82.7951 110.322 82.5767 110.364L82.5433 110.323L62.8499 113.666C65.8072 121.844 71.3807 128.818 78.7058 133.505L86.3373 115.064L86.2776 114.992C86.5593 114.339 86.6249 113.614 86.4648 112.921ZM102.958 120.153C102.67 119.617 102.243 119.169 101.72 118.857C101.198 118.545 100.601 118.38 99.9921 118.381C99.3837 118.382 98.7868 118.548 98.2652 118.861C97.7436 119.175 97.3169 119.624 97.0306 120.161H97.0143L87.3299 137.673C94.264 140.033 101.719 140.417 108.858 138.78C110.182 138.479 111.476 138.117 112.738 137.695L103.031 120.152L102.958 120.153ZM133.616 79.4738L118.715 92.8104L118.724 92.8528C118.266 93.253 117.925 93.7697 117.737 94.348C117.549 94.9264 117.522 95.5447 117.657 96.1375C117.792 96.7303 118.086 97.2754 118.506 97.7149C118.926 98.1544 119.457 98.472 120.043 98.6339L120.061 98.7143L139.362 104.274C140.196 95.6028 138.179 86.8962 133.616 79.4756V79.4738ZM105.933 80.9681C105.961 81.5755 106.153 82.164 106.489 82.6711C106.824 83.1782 107.291 83.5849 107.839 83.8482C108.387 84.1115 108.996 84.2214 109.602 84.1663C110.207 84.1113 110.787 83.8932 111.278 83.5354L111.337 83.5598L127.641 71.9996C121.435 65.9208 113.404 62.0491 104.782 60.98L105.915 80.9627L105.933 80.9681ZM88.6669 83.6087C89.1587 83.9662 89.7383 84.1837 90.3439 84.238C90.9496 84.2923 91.5586 84.1814 92.1062 83.9171C92.6538 83.6527 93.1194 83.2449 93.4536 82.7369C93.7878 82.2289 93.9781 81.6398 94.004 81.0323L94.0872 80.9934L95.2199 60.9791C93.8525 61.1434 92.4945 61.3776 91.151 61.6806C84.0041 63.2871 77.4485 66.8594 72.2242 71.9942L88.6352 83.6276L88.6669 83.6087ZM79.9181 98.7315C80.5055 98.5712 81.0384 98.2545 81.4599 97.8151C81.8814 97.3757 82.1757 96.8301 82.3114 96.2365C82.4471 95.643 82.419 95.0237 82.2303 94.4448C82.0416 93.8659 81.6992 93.3491 81.2397 92.9496L81.256 92.87L66.2733 79.4693C61.7025 86.9088 59.7406 95.6591 60.6975 104.338L79.9027 98.7966L79.9181 98.7315ZM94.4705 104.618L99.9975 107.276L105.508 104.624L106.877 98.6745L103.063 93.9051H96.9248L93.1 98.6673L94.4705 104.618Z"
          fill={active && !completed ? "white" : "#00B39F"}
        />
        <path
          d="M191.367 116.339L175.618 47.9301C175.194 46.1603 174.383 44.5066 173.243 43.0882C172.103 41.6699 170.662 40.5223 169.025 39.7282L105.275 9.29092C103.623 8.50245 101.815 8.09326 99.9844 8.09326C98.1536 8.09326 96.346 8.50245 94.6938 9.29092L30.9563 39.7445C29.3185 40.538 27.8774 41.6854 26.737 43.1036C25.5966 44.5218 24.7853 46.1756 24.3617 47.9455L8.63772 116.353C8.24991 118.082 8.24868 119.875 8.63411 121.605C8.74762 122.132 8.89589 122.651 9.07797 123.158C9.38568 124.024 9.79311 124.851 10.292 125.622C10.5081 125.952 10.7359 126.273 10.9836 126.584L55.1018 181.436C55.2944 181.675 55.5068 181.893 55.7174 182.114C56.4097 182.852 57.1914 183.499 58.0443 184.043C59.1231 184.722 60.2987 185.233 61.531 185.559C62.5415 185.836 63.5839 185.979 64.6317 185.986H65.3178L135.38 185.97C135.806 185.968 136.232 185.943 136.655 185.895C137.262 185.826 137.863 185.712 138.453 185.553C138.876 185.442 139.293 185.309 139.702 185.154C140.021 185.032 140.339 184.91 140.646 184.762C141.107 184.542 141.553 184.294 141.983 184.019C143.093 183.321 144.082 182.446 144.909 181.429L146.255 179.757L189.012 126.566C189.832 125.539 190.476 124.382 190.918 123.145C191.103 122.636 191.254 122.115 191.37 121.586C191.756 119.857 191.755 118.063 191.366 116.334L191.367 116.339ZM125.243 142.946C125.422 143.472 125.634 143.986 125.879 144.485C125.489 145.168 125.382 145.976 125.583 146.736C126.511 148.86 127.644 150.889 128.966 152.793C129.706 153.766 130.389 154.781 131.012 155.834C131.165 156.118 131.366 156.56 131.511 156.861C131.786 157.32 131.962 157.831 132.027 158.362C132.092 158.893 132.045 159.431 131.89 159.943C131.734 160.455 131.473 160.928 131.124 161.333C130.774 161.738 130.344 162.065 129.86 162.294C129.377 162.523 128.851 162.647 128.316 162.66C127.782 162.674 127.25 162.575 126.756 162.37C126.262 162.165 125.816 161.86 125.447 161.472C125.078 161.085 124.794 160.625 124.614 160.121C124.468 159.823 124.266 159.425 124.142 159.143C123.706 158 123.336 156.832 123.035 155.647C122.373 153.428 121.496 151.279 120.417 149.231C119.947 148.598 119.248 148.174 118.47 148.049C118.348 147.839 117.896 147.01 117.653 146.582C106.305 150.88 93.771 150.848 82.4447 146.492L81.5814 148.056C80.9651 148.152 80.392 148.431 79.9371 148.858C78.6361 150.993 77.6416 153.3 76.9828 155.712C76.6839 156.898 76.3163 158.065 75.8818 159.208C75.7598 159.489 75.5554 159.881 75.4099 160.178V160.186L75.4036 160.194C75.2235 160.698 74.9398 161.159 74.5706 161.547C74.2015 161.934 73.7552 162.241 73.2605 162.445C72.7657 162.65 72.2336 162.749 71.6984 162.735C71.1631 162.722 70.6367 162.596 70.153 162.366C69.6693 162.137 69.2391 161.808 68.8901 161.402C68.5411 160.996 68.2812 160.522 68.1269 160.009C67.9727 159.496 67.9276 158.957 67.9947 158.426C68.0617 157.894 68.2393 157.383 68.5161 156.925C68.6598 156.622 68.8524 156.184 69.0042 155.899C69.6266 154.844 70.3093 153.826 71.0491 152.85C72.3951 150.895 73.5514 148.817 74.5023 146.643C74.6035 145.906 74.4853 145.155 74.1624 144.485L74.8567 142.822C64.4147 136.659 56.5889 126.888 52.8554 115.352L51.193 115.635C50.548 115.177 49.7876 114.91 48.9981 114.862C46.7233 115.298 44.4963 115.953 42.3483 116.819C41.2331 117.321 40.0901 117.759 38.9249 118.13C38.6492 118.206 38.2515 118.282 37.9369 118.351C37.9116 118.36 37.8899 118.371 37.8646 118.377C37.8451 118.38 37.8255 118.382 37.8058 118.382C37.2994 118.549 36.7638 118.608 36.2333 118.556C35.7028 118.503 35.1891 118.341 34.725 118.078C34.2609 117.816 33.8567 117.46 33.5383 117.032C33.2198 116.605 32.9942 116.115 32.8757 115.596C32.7573 115.076 32.7487 114.537 32.8505 114.014C32.9522 113.491 33.1621 112.994 33.4668 112.557C33.7714 112.119 34.164 111.75 34.6194 111.473C35.0749 111.196 35.5832 111.017 36.1117 110.948L36.1669 110.934L36.2003 110.925C36.5194 110.85 36.928 110.745 37.2191 110.689C38.4328 110.52 39.6552 110.422 40.8803 110.394C43.1906 110.243 45.4807 109.867 47.718 109.271C48.3811 108.849 48.9414 108.284 49.3579 107.617L50.9552 107.15C49.2219 95.1104 51.9945 82.8544 58.7413 72.7328L57.5182 71.6426C57.4736 70.8513 57.208 70.0884 56.7516 69.4405C54.9944 67.9301 53.094 66.5949 51.0773 65.4539C49.9883 64.8986 48.9322 64.281 47.9142 63.6043C47.6828 63.4317 47.3754 63.1722 47.1241 62.9679L47.0672 62.9282C46.1994 62.3048 45.6135 61.3633 45.4377 60.3094C45.2619 59.2555 45.5104 58.1748 46.1288 57.3035C46.4942 56.8562 46.9599 56.5013 47.4881 56.2676C48.0163 56.0339 48.5922 55.928 49.1689 55.9584C50.1399 56.0001 51.072 56.3517 51.8285 56.9618C52.0879 57.1652 52.4432 57.4373 52.6737 57.6353C53.5619 58.4753 54.4009 59.3657 55.1868 60.3021C56.746 62.0152 58.4688 63.572 60.3305 64.9504C61.0281 65.3172 61.8417 65.3961 62.5968 65.17C63.0512 65.5015 63.5098 65.8275 63.9726 66.1482C70.6769 59.0218 79.3582 54.0621 88.9019 51.9058C91.1734 51.3914 93.4782 51.0371 95.7994 50.8454L95.8898 49.2327C96.4823 48.7061 96.912 48.0211 97.1282 47.2584C97.2115 44.9437 97.0692 42.6264 96.7033 40.3393C96.4607 39.1407 96.2869 37.9292 96.1826 36.7107C96.1727 36.4332 96.1881 36.0499 96.1917 35.7335C96.1917 35.6973 96.1826 35.6612 96.1826 35.6268C96.1285 35.0934 96.1868 34.5547 96.3537 34.0452C96.5207 33.5358 96.7926 33.067 97.1519 32.6691C97.5112 32.2713 97.95 31.9532 98.4399 31.7354C98.9297 31.5176 99.4598 31.4049 99.9959 31.4047C100.532 31.4044 101.062 31.5166 101.552 31.7339C102.042 31.9513 102.481 32.2689 102.841 32.6664C103.201 33.064 103.473 33.5325 103.641 34.0418C103.808 34.551 103.867 35.0898 103.813 35.6232C103.813 35.9577 103.833 36.4006 103.821 36.708C103.717 37.9263 103.542 39.1375 103.298 40.3357C102.93 42.6232 102.785 44.9411 102.866 47.2566C103.017 48.0307 103.464 48.7152 104.112 49.164C104.126 49.4397 104.171 50.36 104.205 50.8671C116.266 51.964 127.519 57.4013 135.873 66.1689L137.325 65.1321C138.105 65.2659 138.906 65.1788 139.639 64.8808C141.501 63.5 143.223 61.9414 144.783 60.227C145.57 59.2901 146.412 58.3997 147.302 57.5603C147.536 57.3596 147.89 57.0902 148.148 56.8859C148.531 56.5084 148.989 56.2157 149.493 56.0266C149.996 55.8376 150.533 55.7565 151.07 55.7886C151.607 55.8208 152.131 55.9654 152.608 56.2131C153.085 56.4609 153.505 56.8062 153.84 57.2266C154.175 57.6471 154.418 58.1333 154.553 58.6537C154.688 59.1742 154.712 59.7172 154.623 60.2475C154.535 60.7778 154.336 61.2836 154.039 61.732C153.743 62.1804 153.355 62.5615 152.902 62.8504C152.646 63.0574 152.308 63.3458 152.062 63.5284C151.042 64.2056 149.983 64.8231 148.891 65.378C146.875 66.5195 144.975 67.8547 143.217 69.3646C142.706 69.9636 142.449 70.739 142.501 71.5251C142.289 71.7203 141.543 72.3812 141.148 72.7391C147.914 82.8245 150.742 95.0428 149.096 107.075L150.636 107.524C151.021 108.217 151.591 108.789 152.281 109.178C154.52 109.775 156.811 110.152 159.123 110.304C160.347 110.332 161.568 110.43 162.78 110.597C163.101 110.656 163.565 110.784 163.892 110.859C164.421 110.929 164.929 111.108 165.384 111.385C165.84 111.662 166.232 112.032 166.537 112.469C166.841 112.907 167.051 113.403 167.152 113.927C167.254 114.45 167.245 114.989 167.126 115.509C167.008 116.028 166.782 116.518 166.463 116.945C166.144 117.372 165.74 117.729 165.276 117.991C164.812 118.253 164.298 118.415 163.767 118.467C163.237 118.519 162.701 118.46 162.195 118.293L162.139 118.286C162.114 118.279 162.091 118.266 162.064 118.259C161.75 118.191 161.355 118.122 161.079 118.05C159.914 117.675 158.772 117.234 157.657 116.728C155.508 115.861 153.278 115.206 151.001 114.771C150.213 114.746 149.447 115.031 148.866 115.564C148.324 115.461 147.78 115.365 147.235 115.278C143.546 126.886 135.719 136.732 125.243 142.945V142.946Z"
          fill={active && !completed ? "white" : "#00B39F"}
        />
        <path
          d="M199.683 118.093L182.501 43.4599C182.039 41.5286 181.154 39.7241 179.91 38.1764C178.666 36.6287 177.094 35.3766 175.307 34.5104L105.759 1.30688C103.956 0.446515 101.984 0 99.9864 0C97.9889 0 96.0167 0.446515 94.214 1.30688L24.6719 34.5303C22.8852 35.3957 21.3128 36.647 20.0683 38.1939C18.8237 39.7407 17.9381 41.5446 17.4753 43.4752L0.323022 118.113C-0.0638738 119.834 -0.103652 121.614 0.206017 123.35C0.515686 125.086 1.16858 126.743 2.12648 128.224C2.36242 128.586 2.61282 128.936 2.88402 129.275L51.0178 189.123C52.2793 190.663 53.8649 191.906 55.6616 192.763C57.4583 193.621 59.422 194.071 61.4127 194.083L138.602 194.065C140.592 194.054 142.555 193.604 144.352 192.748C146.149 191.892 147.735 190.65 148.997 189.111L197.114 129.257C198.346 127.706 199.216 125.898 199.661 123.967C200.105 122.036 200.113 120.03 199.683 118.096V118.093ZM191.369 121.588C191.253 122.116 191.103 122.637 190.919 123.146C190.476 124.384 189.832 125.54 189.012 126.568L146.254 179.757L144.911 181.431C144.082 182.448 143.093 183.323 141.982 184.021C141.553 184.295 141.108 184.543 140.649 184.764C140.34 184.907 140.025 185.036 139.704 185.153C139.295 185.309 138.878 185.443 138.454 185.555C137.864 185.714 137.263 185.829 136.656 185.898C136.233 185.945 135.807 185.97 135.382 185.972L65.3189 185.988H64.6318C63.5844 185.981 62.5423 185.838 61.5321 185.561C60.3003 185.235 59.1253 184.723 58.0472 184.044C57.1937 183.501 56.4114 182.853 55.7185 182.116C55.5079 181.894 55.2955 181.676 55.1038 181.438L10.9847 126.585C10.7388 126.275 10.5083 125.954 10.2931 125.622C9.79421 124.85 9.38679 124.023 9.07905 123.157C8.89694 122.65 8.74866 122.131 8.63519 121.603C8.2499 119.874 8.25113 118.081 8.63881 116.352L24.3628 47.9427C24.7866 46.1732 25.598 44.5198 26.7384 43.1019C27.8789 41.684 29.3198 40.5369 30.9574 39.7436L94.6958 9.29272C96.348 8.50425 98.1556 8.09506 99.9864 8.09506C101.817 8.09506 103.625 8.50425 105.277 9.29272L169.025 39.73C170.663 40.5241 172.103 41.6717 173.243 43.09C174.384 44.5084 175.195 46.1621 175.618 47.9319L191.367 116.34C191.755 118.069 191.756 119.861 191.369 121.59V121.588Z"
          fill={active && !completed ? "#3C494E" : "white"}
        />
        <path
          d="M163.892 110.86C163.566 110.785 163.101 110.657 162.782 110.598C161.57 110.431 160.349 110.332 159.125 110.303C156.813 110.152 154.521 109.776 152.282 109.181C151.591 108.791 151.021 108.218 150.636 107.525L149.096 107.076C150.743 95.0439 147.915 82.8257 141.15 72.74C141.544 72.382 142.291 71.7212 142.501 71.5269C142.449 70.7409 142.706 69.9655 143.217 69.3663C144.975 67.8565 146.875 66.5213 148.892 65.3798C149.983 64.8249 151.042 64.2074 152.062 63.5302C152.308 63.3476 152.644 63.0583 152.902 62.8522C153.355 62.5633 153.743 62.1824 154.039 61.7341C154.336 61.2857 154.535 60.7801 154.623 60.2499C154.712 59.7197 154.688 59.1768 154.553 58.6565C154.418 58.1361 154.175 57.65 153.841 57.2295C153.506 56.809 153.086 56.4636 152.609 56.2157C152.132 55.9678 151.609 55.823 151.072 55.7906C150.535 55.7582 149.998 55.839 149.495 56.0277C148.991 56.2163 148.533 56.5087 148.15 56.8859C147.89 57.0911 147.536 57.3605 147.304 57.5612C146.413 58.4006 145.571 59.291 144.783 60.2279C143.223 61.9423 141.501 63.5009 139.639 64.8817C138.906 65.1797 138.105 65.2668 137.325 65.133L135.873 66.1698C127.519 57.4022 116.266 51.9649 104.205 50.868C104.17 50.3609 104.126 49.4424 104.113 49.1649C103.465 48.7157 103.018 48.0313 102.868 47.2575C102.787 44.942 102.932 42.6241 103.3 40.3366C103.543 39.1387 103.716 37.9277 103.82 36.7098C103.831 36.4024 103.813 35.9558 103.813 35.6241C103.867 35.0907 103.808 34.5519 103.641 34.0427C103.473 33.5334 103.201 33.0648 102.841 32.6673C102.482 32.2698 102.043 31.9521 101.552 31.7348C101.062 31.5175 100.532 31.4053 99.9961 31.4056C99.46 31.4058 98.9299 31.5185 98.44 31.7363C97.9502 31.9541 97.5114 32.2722 97.1521 32.67C96.7927 33.0679 96.5208 33.5367 96.3539 34.0461C96.1869 34.5555 96.1286 35.0943 96.1828 35.6277C96.1828 35.6639 96.1909 35.6982 96.1918 35.7344C96.1882 36.0508 96.1729 36.4341 96.1828 36.7107C96.287 37.9295 96.4609 39.1413 96.7035 40.3402C97.0693 42.6273 97.2116 44.9446 97.1284 47.2593C96.9118 48.0213 96.4822 48.7057 95.8899 49.2318L95.7995 50.8463C93.4784 51.038 91.1736 51.3923 88.9021 51.9067C79.3595 54.0632 70.6791 59.0226 63.9755 66.1481C63.5115 65.8281 63.0516 65.5021 62.596 65.17C61.8412 65.3958 61.028 65.317 60.3306 64.9504C58.469 63.5722 56.7462 62.0157 55.1869 60.303C54.402 59.3666 53.5638 58.4763 52.6766 57.6362C52.4442 57.4373 52.089 57.1661 51.8286 56.9582C51.0721 56.3481 50.1401 55.9964 49.1691 55.9548C48.5922 55.9246 48.0162 56.0308 47.488 56.2648C46.9598 56.4988 46.4942 56.8541 46.129 57.3017C45.5105 58.173 45.2621 59.2537 45.4379 60.3076C45.6137 61.3615 46.1995 62.303 47.0673 62.9263L47.1261 62.9679C47.3756 63.1722 47.6829 63.4335 47.9144 63.6025C48.9323 64.2798 49.9884 64.8979 51.0774 65.4539C53.0939 66.5955 54.9941 67.9313 56.7508 69.4423C57.2072 70.0896 57.473 70.8519 57.5183 71.6426L58.7396 72.7346C51.9935 82.8564 49.2215 95.1124 50.9554 107.152L49.358 107.617C48.9412 108.283 48.3809 108.847 47.7182 109.268C45.4807 109.866 43.1903 110.243 40.8795 110.396C39.6548 110.423 38.4327 110.522 37.2193 110.69C36.9264 110.745 36.5196 110.848 36.2005 110.927L36.167 110.934L36.1128 110.951C35.5843 111.02 35.0762 111.199 34.6209 111.476C34.1656 111.753 33.7732 112.123 33.4688 112.56C33.1643 112.998 32.9545 113.494 32.8529 114.017C32.7512 114.54 32.7599 115.079 32.8784 115.599C32.9969 116.118 33.2225 116.607 33.5409 117.035C33.8593 117.462 34.2635 117.819 34.7274 118.081C35.1914 118.343 35.7051 118.506 36.2355 118.558C36.7659 118.61 37.3014 118.552 37.8078 118.385L37.8647 118.376C37.89 118.371 37.9117 118.358 37.937 118.353C38.2516 118.281 38.6476 118.206 38.9242 118.131C40.089 117.759 41.2317 117.321 42.3467 116.819C44.4952 115.953 46.7228 115.297 48.9982 114.862C49.7873 114.911 50.547 115.179 51.1913 115.637L52.8546 115.352C56.5886 126.888 64.4151 136.659 74.8577 142.822L74.1626 144.485C74.4857 145.155 74.6043 145.906 74.5034 146.643C73.5524 148.816 72.3961 150.894 71.0501 152.848C70.3101 153.824 69.627 154.841 69.0044 155.896C68.8525 156.184 68.66 156.624 68.5144 156.925C68.2391 157.383 68.0627 157.894 67.9967 158.425C67.9306 158.955 67.9764 159.494 68.131 160.006C68.2857 160.518 68.5457 160.991 68.8945 161.397C69.2433 161.802 69.673 162.13 70.1561 162.359C70.6392 162.588 71.165 162.714 71.6995 162.728C72.234 162.741 72.7655 162.643 73.2598 162.439C73.7541 162.235 74.2002 161.93 74.5694 161.543C74.9387 161.157 75.2229 160.697 75.4037 160.194L75.4101 160.186V160.177C75.5547 159.879 75.7599 159.488 75.8819 159.208C76.3164 158.065 76.6841 156.898 76.983 155.712C77.6418 153.3 78.6362 150.993 79.9372 148.858C80.3921 148.431 80.9652 148.151 81.5816 148.055L82.4467 146.491C93.7725 150.846 106.306 150.878 117.653 146.58C117.896 147.013 118.348 147.839 118.467 148.048C119.246 148.172 119.946 148.597 120.415 149.232C121.495 151.28 122.373 153.428 123.035 155.647C123.337 156.832 123.706 158 124.142 159.143C124.266 159.425 124.468 159.821 124.614 160.121C124.795 160.625 125.078 161.085 125.447 161.472C125.816 161.86 126.262 162.165 126.756 162.37C127.25 162.575 127.782 162.674 128.316 162.66C128.851 162.647 129.377 162.523 129.861 162.294C130.344 162.065 130.775 161.738 131.124 161.333C131.473 160.928 131.734 160.455 131.89 159.943C132.045 159.431 132.092 158.893 132.027 158.362C131.962 157.831 131.786 157.32 131.512 156.861C131.366 156.56 131.165 156.119 131.014 155.834C130.392 154.781 129.709 153.766 128.969 152.793C127.647 150.889 126.514 148.86 125.586 146.736C125.385 145.976 125.49 145.168 125.879 144.485C125.635 143.986 125.422 143.472 125.243 142.946C135.72 136.733 143.547 126.887 147.236 115.279C147.729 115.358 148.589 115.508 148.868 115.565C149.448 115.032 150.214 114.747 151.002 114.772C153.278 115.207 155.506 115.862 157.655 116.729C158.77 117.235 159.913 117.676 161.079 118.051C161.355 118.123 161.748 118.192 162.065 118.261C162.091 118.268 162.114 118.279 162.14 118.287L162.194 118.295C162.7 118.461 163.235 118.519 163.765 118.467C164.296 118.414 164.809 118.252 165.273 117.99C165.736 117.728 166.14 117.371 166.459 116.944C166.777 116.517 167.002 116.028 167.121 115.509C167.24 114.989 167.249 114.451 167.147 113.928C167.046 113.405 166.837 112.909 166.533 112.471C166.229 112.034 165.837 111.665 165.382 111.387C164.927 111.11 164.42 110.93 163.892 110.86ZM127.642 72.0006L111.336 83.5599L111.279 83.5327C110.788 83.8911 110.209 84.1097 109.603 84.1651C108.998 84.2206 108.388 84.1109 107.84 83.8478C107.292 83.5846 106.825 83.1778 106.489 82.6706C106.154 82.1634 105.962 81.5748 105.934 80.9672L105.916 80.9582L104.783 60.9773C113.405 62.0478 121.435 65.9207 127.641 72.0006H127.642ZM96.9259 93.9024H103.062L106.877 98.6718L105.509 104.62L99.9985 107.272L94.4716 104.615L93.1011 98.6637L96.9259 93.9024ZM91.153 61.677C92.4971 61.3745 93.8557 61.141 95.2237 60.9773L94.0892 80.9889L94.006 81.0287C93.9803 81.6364 93.7903 82.2257 93.4563 82.7339C93.1222 83.2421 92.6566 83.6503 92.1089 83.9148C91.5612 84.1794 90.9521 84.2904 90.3463 84.2362C89.7405 84.182 89.1608 83.9645 88.6688 83.6069L88.6372 83.6249L72.2262 71.9888C77.4507 66.8546 84.0063 63.283 91.153 61.677ZM66.2753 79.4675L81.258 92.8682L81.2417 92.9496C81.7009 93.3492 82.0431 93.8659 82.2317 94.4447C82.4202 95.0234 82.4482 95.6426 82.3125 96.236C82.1769 96.8294 81.8827 97.3748 81.4613 97.8142C81.04 98.2535 80.5073 98.5703 79.9201 98.7306L79.9047 98.7957L60.6995 104.337C59.7425 95.6582 61.7044 86.9079 66.2753 79.4684V79.4675ZM86.3357 115.067L78.7051 133.505C71.3811 128.817 65.8088 121.843 62.8528 113.664L82.5443 110.32L82.5778 110.364C82.7952 110.322 83.0163 110.303 83.2377 110.305C83.7899 110.313 84.3316 110.458 84.8149 110.725C85.2982 110.992 85.7083 111.374 86.0089 111.837C86.3095 112.301 86.4913 112.831 86.5384 113.381C86.5854 113.931 86.4963 114.485 86.2787 114.992L86.3357 115.067ZM108.859 138.778C101.72 140.416 94.2653 140.033 87.331 137.673L97.0154 120.161H97.0316C97.3196 119.625 97.747 119.178 98.2685 118.866C98.79 118.555 99.3861 118.39 99.9938 118.389C100.601 118.388 101.198 118.552 101.72 118.863C102.242 119.174 102.67 119.621 102.959 120.155H103.031L112.74 137.696C111.48 138.117 110.186 138.478 108.859 138.78V138.778ZM121.372 133.579L113.662 114.953L113.686 114.919C113.344 114.122 113.323 113.224 113.626 112.412C113.93 111.6 114.535 110.936 115.316 110.559C115.718 110.362 116.156 110.249 116.604 110.225C116.863 110.213 117.122 110.232 117.377 110.282L117.41 110.24L137.277 113.598C134.344 121.842 128.748 128.873 121.372 133.58V133.579ZM139.364 104.272L120.062 98.7125L120.044 98.6312C119.457 98.4693 118.926 98.1517 118.506 97.7122C118.086 97.2727 117.792 96.7276 117.657 96.1348C117.522 95.542 117.55 94.9237 117.737 94.3453C117.925 93.767 118.266 93.2503 118.724 92.8501L118.717 92.8113L133.616 79.4765C138.179 86.8966 140.196 95.6024 139.363 104.273L139.364 104.272Z"
          fill={active && !completed ? "#3C494E" : "white"}
        />
      </SvgIcon>
    ),
    2: (
      <SvgIcon
        viewBox="0 0 204 204"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <g clip-path="url(#clip0)">
          <path
            d="M138.901 99.6146C137.462 99.6146 136.273 100.1 135.319 101.054C126.481 109.658 114.529 114.429 102.109 114.429C89.6884 114.429 77.9877 109.641 68.9151 101.037C67.9609 100.083 66.5214 99.5979 65.3329 99.5979C39.2868 101.523 18.7479 123.501 18.7479 149.782V172.949C18.7479 190.14 32.6079 204 49.799 204H154.184C171.375 204 185.235 190.14 185.235 172.949V149.782C185.486 123.501 164.948 101.523 138.901 99.6146Z"
            fill="#3C494E"
          />
          <path
            d="M102.126 97.221C125.293 97.221 144.409 78.356 144.409 54.9379C144.409 31.7709 125.293 12.8892 102.126 12.8892C78.9586 12.8892 59.8425 31.7709 59.8425 55.1722C59.8425 78.356 78.9418 97.221 102.126 97.221ZM102.126 22.4472C120.036 22.4472 134.851 37.0103 134.851 55.1722C134.851 73.0831 120.288 87.8973 102.126 87.8973C84.2147 87.8973 69.4005 73.3342 69.4005 55.1722C69.4005 37.0103 84.1979 22.4472 102.126 22.4472Z"
            fill="#3C494E"
          />
          <path
            d="M162.889 74.506H154.1C152.996 74.506 152.092 73.6021 152.092 72.4973V47.6397C152.092 46.5349 152.996 45.631 154.1 45.631H162.889C163.993 45.631 164.897 46.5349 164.897 47.6397V72.4973C164.897 73.6021 163.993 74.506 162.889 74.506Z"
            fill="#647881"
          />
          <path
            d="M50.1002 74.7738H41.3122C40.2074 74.7738 39.3035 73.8699 39.3035 72.7651V47.9075C39.3035 46.8027 40.2074 45.8988 41.3122 45.8988H50.1002C51.205 45.8988 52.1089 46.8027 52.1089 47.9075V72.7651C52.1089 73.8699 51.205 74.7738 50.1002 74.7738Z"
            fill="#647881"
          />
          <path
            d="M158.721 41.0946H154.402C150.15 17.8105 128.44 0 102.126 0C75.8116 0 53.9001 17.8105 49.7823 41.0946H45.497C39.2701 41.0946 34.2818 45.882 34.2651 51.3557V68.7979C34.2651 74.5394 39.2868 79.3101 45.497 79.3101H52.8957C55.0384 79.3101 56.7123 77.6362 56.7123 75.7279V49.7655C56.729 49.6651 56.729 49.5479 56.729 49.4474C56.729 26.2805 77.0503 7.3987 102.126 7.3987C127.201 7.3987 147.505 26.2805 147.505 49.4474V70.8401C135.704 78.4731 120.505 80.6492 102.36 77.8538C100.201 77.6194 98.2923 79.059 98.058 80.9673C97.5725 82.8923 99.0121 84.5494 100.92 85.0349C119.836 88.0814 135.771 85.7881 148.928 78.5066C149.581 79.0088 150.418 79.3101 151.322 79.3101H158.737C164.948 79.3101 169.953 74.5227 169.953 69.049V51.6068C169.953 45.8653 164.931 41.0946 158.721 41.0946ZM49.0625 72.1625H45.7147C43.8064 72.1625 42.3668 70.7229 42.3668 69.049V51.6235C42.3668 49.9496 43.8064 48.5101 45.7147 48.5101H49.0625V72.1625ZM161.851 68.7812C161.851 70.4551 160.411 71.8946 158.503 71.8946H155.155V48.2422H158.503C160.411 48.2422 161.851 49.6818 161.851 51.3557V68.7812Z"
            fill="#3C494E"
          />
          <path
            d="M80.4652 147.874C83.9637 141.429 90.3246 136.725 97.7735 135.453L96.3005 126.983C86.1733 128.724 77.6196 135.085 72.8322 143.739L80.4652 147.874Z"
            fill="#00D3A9"
          />
          <path
            d="M80.8334 172.447C78.6239 168.764 77.335 164.445 77.335 159.742C77.335 156.712 77.8873 153.849 78.8917 151.188L70.8067 148.242C69.5178 151.841 68.7812 155.707 68.7812 159.758C68.7812 166.019 70.5389 171.911 73.485 176.882L80.8334 172.447Z"
            fill="#00B39F"
          />
          <path
            d="M102.26 184.432H101.975C94.3252 184.432 87.5291 180.934 82.9091 175.41L76.2804 180.934C82.3567 188.299 91.6637 193.086 101.958 193.086C102.042 193.086 102.243 193.086 102.327 193.086L102.26 184.432Z"
            fill="#00D3A9"
          />
          <path
            d="M123.435 171.894C119.836 178.255 113.391 182.859 105.942 184.047L107.315 192.601C117.442 190.944 125.996 184.767 130.884 176.129L123.435 171.894Z"
            fill="#00B39F"
          />
          <path
            d="M123.25 147.321C125.376 151.004 126.565 155.155 126.565 159.742C126.565 162.872 126.012 165.818 124.908 168.58L133.009 171.71C134.382 168.028 135.219 163.977 135.219 159.842C135.219 153.766 133.562 147.957 130.699 143.086L123.25 147.321Z"
            fill="#00D3A9"
          />
          <path
            d="M116.89 142.735L115.048 140.877L119.434 136.491L115.048 132.105L116.89 130.247L123.133 136.491L116.89 142.735Z"
            fill="#20BDAB"
          />
          <path
            d="M104.402 142.735L102.544 140.877L106.947 136.491L102.544 132.105L104.402 130.247L110.646 136.491L104.402 142.735Z"
            fill="#20BDAB"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="204" height="204" fill="white" />
          </clipPath>
        </defs>
      </SvgIcon>
    ),
    3: (
      <SvgIcon
        viewBox="0 0 162 121"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <g clip-path="url(#clip0)">
          <path
            d="M90.3304 92.378C84.9617 92.378 82.2773 81.5627 79.5929 70.7175C76.9086 59.9022 74.2242 49.057 68.8555 49.057"
            stroke="#BF9000"
            stroke-width="0.167698"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M27.1351 26.4406C27.1351 21.9292 31.0808 18.2843 35.9644 18.2843C38.293 18.2843 40.557 19.1507 42.2064 20.6744C43.8558 22.1981 44.7937 24.2895 44.7937 26.4406C44.7937 30.952 40.848 34.5969 35.9644 34.5969C31.0808 34.6268 27.1351 30.952 27.1351 26.4406Z"
            fill="#00B39F"
          />
          <path
            d="M0 49.0871C0 44.5757 3.9457 40.9308 8.82931 40.9308C11.1579 40.9308 13.4218 41.7972 15.0713 43.3209C16.7207 44.8446 17.6586 46.936 17.6586 49.0871C17.6586 53.5984 13.7129 57.2434 8.82931 57.2434C3.9457 57.2434 0 53.5984 0 49.0871Z"
            fill="#00B39F"
          />
          <path
            d="M27.1352 26.4408C17.9824 26.4408 8.82971 33.6709 8.82971 40.901"
            stroke="#359AC0"
            stroke-width="0.167698"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M149.387 29.0698C144.988 27.1278 143.145 22.258 145.247 18.1948C146.249 16.2528 148.061 14.759 150.26 14.012C152.459 13.295 154.885 13.4145 157.019 14.3407C161.418 16.2827 163.261 21.1525 161.159 25.2157C159.024 29.279 153.753 31.0118 149.387 29.0698Z"
            fill="#00B39F"
          />
          <path
            d="M51.1647 49.0871C51.1647 44.5757 55.1104 40.9308 59.994 40.9308C62.3226 40.9308 64.5865 41.7972 66.2359 43.3209C67.8854 44.8446 68.8233 46.936 68.8233 49.0871C68.8233 53.5984 64.8776 57.2434 59.994 57.2434C55.1427 57.2434 51.1647 53.5984 51.1647 49.0871Z"
            fill="#00B39F"
          />
          <path
            d="M27.0378 82.1606C27.0378 77.6492 30.9835 74.0043 35.8671 74.0043C38.1958 74.0043 40.4597 74.8707 42.1091 76.3944C43.7585 77.9181 44.6965 80.0095 44.6965 82.1606C44.6965 86.6719 40.7508 90.3169 35.8671 90.3169C30.9835 90.3467 27.0378 86.6719 27.0378 82.1606Z"
            fill="#00B39F"
          />
          <path
            d="M60.0266 57.2432C60.0266 61.4259 54.0111 63.5172 47.9631 65.6086C41.9476 67.6999 35.8997 69.7913 35.8997 73.974"
            stroke="#359AC0"
            stroke-width="0.279497"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M144.859 24.4091C141.657 24.4091 140.008 25.4547 138.488 26.5303C136.968 27.576 135.545 28.6515 132.601 28.6515"
            stroke="#359AC0"
            stroke-width="0.167698"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M35.8674 74.0043C35.8674 69.8216 29.108 67.7302 22.3486 65.6389C15.5891 63.5475 8.82971 61.4562 8.82971 57.2734"
            stroke="#359AC0"
            stroke-width="0.167698"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M60.0264 40.901C60.0264 33.6709 52.4261 26.4408 44.8258 26.4408"
            stroke="#359AC0"
            stroke-width="0.167698"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M123.804 57.2434C118.921 57.2434 114.975 53.5984 114.975 49.0871C114.975 46.936 115.913 44.8446 117.562 43.3209C119.212 41.7972 121.476 40.9308 123.804 40.9308C128.688 40.9308 132.634 44.5757 132.634 49.0871C132.634 53.5686 128.688 57.2434 123.804 57.2434Z"
            fill="#00B39F"
          />
          <path
            d="M99.6452 36.7779C94.7616 36.7779 90.8159 33.133 90.8159 28.6216C90.8159 26.4705 91.7538 24.3792 93.4033 22.8555C95.0527 21.3318 97.3166 20.4653 99.6452 20.4653C104.529 20.4653 108.475 24.1103 108.475 28.6216C108.507 33.133 104.529 36.7779 99.6452 36.7779Z"
            fill="#00B39F"
          />
          <path
            d="M123.804 36.7779C118.921 36.7779 114.975 33.133 114.975 28.6216C114.975 26.4705 115.913 24.3792 117.562 22.8555C119.212 21.3318 121.476 20.4653 123.804 20.4653C128.688 20.4653 132.634 24.1103 132.634 28.6216C132.634 33.133 128.688 36.7779 123.804 36.7779Z"
            fill="#00B39F"
          />
          <path
            d="M114.943 49.0575C113.326 49.0575 112.517 43.9486 111.709 38.8397C110.9 33.7308 110.092 28.6219 108.475 28.6219"
            stroke="#359AC0"
            stroke-width="0.167698"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M108.507 28.6219C110.124 28.6219 110.932 28.6518 111.709 28.6817C112.517 28.7116 113.326 28.7415 114.943 28.7415"
            stroke="#359AC0"
            stroke-width="0.167698"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M123.805 40.9008C123.805 39.885 123.837 39.3472 123.869 38.8393C123.902 38.3314 123.934 37.7936 123.934 36.7778"
            stroke="#359AC0"
            stroke-width="0.167698"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M90.8158 28.6219C85.3177 28.6219 82.5686 33.7308 79.8196 38.8397C77.0705 43.9486 74.3215 49.0575 68.8234 49.0575"
            stroke="#359AC0"
            stroke-width="0.279497"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M123.804 16.3126C118.921 16.3126 114.975 12.6677 114.975 8.1563C114.975 6.00518 115.913 3.91383 117.562 2.39012C119.212 0.86642 121.476 0 123.804 0C128.688 0 132.634 3.64494 132.634 8.1563C132.634 12.6677 128.688 16.3126 123.804 16.3126Z"
            fill="#00B39F"
          />
          <path
            d="M123.805 20.4656C123.805 19.4498 123.837 18.912 123.869 18.4041C123.902 17.8962 123.934 17.3585 123.934 16.3427"
            stroke="#359AC0"
            stroke-width="0.167698"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M108.507 28.6217C110.124 28.6217 110.932 23.5128 111.741 18.4039C112.549 13.295 113.358 8.18616 114.975 8.18616"
            stroke="#359AC0"
            stroke-width="0.279497"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M123.287 121C118.403 121 114.458 117.355 114.458 112.844C114.458 110.693 115.395 108.601 117.045 107.078C118.694 105.554 120.958 104.688 123.287 104.688C128.17 104.688 132.116 108.333 132.116 112.844C132.116 117.355 128.17 121 123.287 121Z"
            fill="#00B39F"
          />
          <path
            d="M99.16 100.535C94.2764 100.535 90.3307 96.8898 90.3307 92.3785C90.3307 90.2274 91.2686 88.136 92.918 86.6123C94.5675 85.0886 96.8314 84.2222 99.16 84.2222C104.044 84.2222 107.989 87.8671 107.989 92.3785C107.989 96.8898 104.044 100.535 99.16 100.535Z"
            fill="#00B39F"
          />
          <path
            d="M123.287 100.535C118.403 100.535 114.458 96.8898 114.458 92.3785C114.458 90.2274 115.395 88.136 117.045 86.6123C118.694 85.0886 120.958 84.2222 123.287 84.2222C128.17 84.2222 132.116 87.8671 132.116 92.3785C132.116 96.8898 128.17 100.535 123.287 100.535Z"
            fill="#00B39F"
          />
          <path
            d="M114.458 112.844C112.84 112.844 112.032 107.735 111.256 102.626C110.447 97.5172 109.639 92.4083 108.021 92.4083"
            stroke="#CD502F"
            stroke-width="0.167698"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M107.989 92.3781C109.606 92.3781 110.415 92.4079 111.191 92.4378C112 92.4677 112.808 92.4976 114.425 92.4976"
            stroke="#CD502F"
            stroke-width="0.167698"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M123.287 104.687C123.287 103.671 123.319 103.134 123.352 102.626C123.384 102.118 123.416 101.58 123.416 100.564"
            stroke="#CD502F"
            stroke-width="0.167698"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M123.319 80.099C118.435 80.099 114.49 76.454 114.49 71.9427C114.49 69.7916 115.428 67.7002 117.077 66.1765C118.726 64.6528 120.99 63.7864 123.319 63.7864C128.203 63.7864 132.148 67.4313 132.148 71.9427C132.148 76.454 128.203 80.099 123.319 80.099Z"
            fill="#00B39F"
          />
          <path
            d="M123.287 84.2218C123.287 83.206 123.319 82.6683 123.352 82.1604C123.384 81.6525 123.416 81.1147 123.416 80.0989"
            stroke="#BF9000"
            stroke-width="0.167698"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M107.989 92.3778C109.606 92.3778 110.415 87.2689 111.223 82.16C112.032 77.0512 112.841 71.9423 114.458 71.9423"
            stroke="#BF9000"
            stroke-width="0.167698"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="162" height="121" fill="white" />
          </clipPath>
        </defs>{" "}
      </SvgIcon>
    ),
    4: (
      <SvgIcon
        viewBox="0 0 50 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            d="M24.5667 0.289185C10.9995 0.289185 0 11.2873 0 24.855C0 38.4222 10.9995 49.4213 24.5667 49.4213C38.1339 49.4213 49.1329 38.4222 49.1329 24.855C49.1329 11.2873 38.1335 0.289185 24.5667 0.289185V0.289185ZM24.5667 46.2669C20.7066 46.2669 17.5769 43.6883 17.5769 40.5084H31.5564C31.5564 43.6879 28.4268 46.2669 24.5667 46.2669ZM36.1115 38.6013H13.0206V34.4143H36.112V38.6013H36.1115ZM36.0287 32.2592H13.0865C13.0102 32.1712 12.9321 32.0845 12.8584 31.9952C10.4948 29.1253 9.93818 27.627 9.39757 26.1001C9.38847 26.0498 12.2636 26.6875 14.3025 27.1462C14.3025 27.1462 15.3516 27.389 16.8855 27.6686C15.4128 25.9423 14.5383 23.7478 14.5383 21.5047C14.5383 16.5803 18.3152 12.2771 16.9527 8.79889C18.2788 8.90684 19.6973 11.5977 19.7931 15.8051C21.203 13.8569 21.793 10.2989 21.793 8.11739C21.793 5.85871 23.2813 3.235 24.77 3.14526C23.443 5.33241 25.1138 7.20741 26.5991 11.8587C27.1561 13.6058 27.085 16.546 27.5151 18.4106C27.6577 14.5379 28.3236 8.88733 30.7804 6.93646C29.6966 9.39326 30.9408 12.4674 31.7919 13.9453C33.1648 16.3297 33.9972 18.1362 33.9972 21.5528C33.9972 23.8436 33.1514 26.0004 31.7247 27.6864C33.3469 27.382 34.4672 27.1076 34.4672 27.1076L39.7354 26.0797C39.7358 26.0793 38.9702 29.2276 36.0287 32.2592Z"
            fill="#E6522C"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="50" height="49.4221" fill="white" />
          </clipPath>
        </defs>
      </SvgIcon>
    ),
  };
};

export default icons;
