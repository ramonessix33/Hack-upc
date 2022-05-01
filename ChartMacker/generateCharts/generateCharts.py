import plotly.express as px
import pandas as pd
import os
import imageio
import io
from PIL import Image

def toImage(i, diccionario):
    df = pd.DataFrame(dict(
        r=[diccionario[i]["anger"],diccionario[i]["disgust"] ,diccionario[i]["fear"] ,diccionario[i]["happiness"] , diccionario[i]["sadness"], diccionario[i]["surprise"], diccionario[i]["neutral"]],
        theta=['anger','disgust','fear','happiness','sadness','surprise','neutral']))
    fig = px.line_polar(df, r='r', theta='theta', line_close=True, range_r=[0,1])
    fig.update_traces(fill='toself')
    return fig

def process(diccionario):
    images = []
    imagePath = "images"
    if not os.path.exists(imagePath):
        os.mkdir(imagePath)
    for a in range(0 ,len(diccionario)-1):
        i = str(a)
        fig = toImage(i, diccionario)
        fig_bytes = fig.to_image(format="png")#, width=600, height=450)
        buf = io.BytesIO(fig_bytes)
        img = Image.open(buf)
        images.append(img)
        images.append(img) # 1/2 speed
    fig = toImage("Average", diccionario)
    fig.write_image(imagePath+"/average.png")
    imageio.mimsave(imagePath+"/result.gif", images)


#llamamos a la funcion
dic = {"0": {"frame": 0.0, "anger": 0.011481126, "disgust": 0.008588328, "fear": 0.28276002, "happiness": 0.03153404, "sadness": 0.36249587, "surprise": 0.24461977, "neutral": 0.05852083}, "1": {"frame": 24.0, "anger": 0.010436537, "disgust": 0.014787163, "fear": 0.2647472, "happiness": 0.013683925, "sadness": 0.35222793, "surprise": 0.118749544, "neutral": 0.22536775}, "2": {"frame": 48.0, "anger": 0.0032446363, "disgust": 0.0025557734, "fear": 0.2560004, "happiness": 0.0060295323, "sadness": 0.3910451, "surprise": 0.13541123, "neutral": 0.20571332}, "3": {"frame": 72.0, "anger": 0.0032131674, "disgust": 0.0028836632, "fear": 0.25043207, "happiness": 0.01066713, "sadness": 0.35041156, "surprise": 0.12937115, "neutral": 0.25302136}, "4": {"frame": 96.0, "anger": 0.0034118192, "disgust": 0.002280667, "fear": 0.16601524, "happiness": 0.0032083937, "sadness": 0.46160066, "surprise": 0.13026589, "neutral": 0.23321731}, "5": {"frame": 120.0, "anger": 0.0020131962, "disgust": 0.0016129431, "fear": 0.22350258, "happiness": 0.004835015, "sadness": 0.44039565, "surprise": 0.0884906, "neutral": 0.23915}, "6": {"frame": 144.0, "anger": 0.002731638, "disgust": 0.0021742687, "fear": 0.21082954, "happiness": 0.003575744, "sadness": 0.46025982, "surprise": 0.10118468, "neutral": 0.21924429}, "7": {"frame": 168.0, "anger": 0.0026715929, "disgust": 0.0021777994, "fear": 0.20214255, "happiness": 0.004067701, "sadness": 0.45663005, "surprise": 0.13217683, "neutral": 0.20013349}, "8": {"frame": 192.0, "anger": 0.0016750927, "disgust": 0.0023000226, "fear": 0.17363371, "happiness": 0.0037168767, "sadness": 0.51883024, "surprise": 0.062489565, "neutral": 0.23735443}, "9": {"frame": 216.0, "anger": 0.0017104952, "disgust": 0.0019707207, "fear": 0.21759771, "happiness": 0.0038655219, "sadness": 0.48666152, "surprise": 0.06927957, "neutral": 0.21891443}, "10": {"frame": 240.0, "anger": 0.0033128955, "disgust": 0.0046809246, "fear": 0.22703476, "happiness": 0.008015342, "sadness": 0.44034553, "surprise": 0.056923106, "neutral": 0.25968748}, "11": {"frame": 264.0, "anger": 0.0022141954, "disgust": 0.0039177025, "fear": 0.4242582, "happiness": 0.0046574567, "sadness": 0.3883806, "surprise": 0.059529625, "neutral": 0.11704228}, "12": {"frame": 288.0, "anger": 0.019164195, "disgust": 0.010805486, "fear": 0.015335724, "happiness": 0.00587838, "sadness": 0.14063174, "surprise": 0.05235542, "neutral": 0.75582904}, "13": {"frame": 312.0, "anger": 0.02191157, "disgust": 0.04134515, "fear": 0.16248153, "happiness": 0.0273614, "sadness": 0.3206001, "surprise": 0.01782145, "neutral": 0.40847877}, "14": {"frame": 336.0, "anger": 0.0029951679, "disgust": 0.0062932624, "fear": 0.2282496, "happiness": 0.008779539, "sadness": 0.44884866, "surprise": 0.10390829, "neutral": 0.20092548}, "15": {"frame": 360.0, "anger": 0.0026880077, "disgust": 0.0028599629, "fear": 0.13867322, "happiness": 0.0047650617, "sadness": 0.59613085, "surprise": 0.038667902, "neutral": 0.21621501}, "16": {"frame": 384.0, "anger": 0.009445017, "disgust": 0.013920649, "fear": 0.12169597, "happiness": 0.012781405, "sadness": 0.6118609, "surprise": 0.07560399, "neutral": 0.15469205}, "17": {"frame": 408.0, "anger": 0.0055978694, "disgust": 0.0059213676, "fear": 0.4883473, "happiness": 0.004573981, "sadness": 0.33031622, "surprise": 0.059976984, "neutral": 0.105266325}, "18": {"frame": 432.0, "anger": 0.01319288, "disgust": 0.016791059, "fear": 0.22478294, "happiness": 0.0092399875, "sadness": 0.5905502, "surprise": 0.051047564, "neutral": 0.094395414}, "19": {"frame": 456.0, "anger": 0.038913485, "disgust": 0.19353086, "fear": 0.27994874, "happiness": 0.048643157, "sadness": 0.2809655, "surprise": 0.027956175, "neutral": 0.13004202}, "20": {"frame": 480.0, "anger": 0.065089636, "disgust": 0.063911766, "fear": 0.16315596, "happiness": 0.22338673, "sadness": 0.07529345, "surprise": 0.30915895, "neutral": 0.10000354}, "21": {"frame": 504.0, "anger": 0.029029183, "disgust": 0.005767199, "fear": 0.006997201, "happiness": 0.05312119, "sadness": 0.1723573, "surprise": 0.0484984, "neutral": 0.6842295}, "22": {"frame": 528.0, "anger": 0.009789926, "disgust": 0.002575034, "fear": 0.006047315, "happiness": 0.0036794154, "sadness": 0.26609933, "surprise": 0.002050256, "neutral": 0.70975876}, "23": {"frame": 552.0, "anger": 0.0014795475, "disgust": 0.0008069671, "fear": 0.16319838, "happiness": 0.0029403307, "sadness": 0.47462296, "surprise": 0.17234674, "neutral": 0.18460497}, "24": {"frame": 576.0, "anger": 0.001758952, "disgust": 0.0015061536, "fear": 0.37347183, "happiness": 0.0033174225, "sadness": 0.39295858, "surprise": 0.05767072, "neutral": 0.16931635}, "25": {"frame": 600.0, "anger": 0.0028506021, "disgust": 0.004643568, "fear": 0.35510778, "happiness": 0.007206974, "sadness": 0.3066833, "surprise": 0.05280559, "neutral": 0.27070212}, "26": {"frame": 624.0, "anger": 0.0037614477, "disgust": 0.0059155, "fear": 0.34888268, "happiness": 0.0058834087, "sadness": 0.4049748, "surprise": 0.052049134, "neutral": 0.17853306}, "27": {"frame": 648.0, "anger": 0.003601729, "disgust": 0.004260417, "fear": 0.31317496, "happiness": 0.0046789297, "sadness": 0.48435584, "surprise": 0.035191357, "neutral": 0.15473674}, "28": {"frame": 672.0, "anger": 0.006043575, "disgust": 0.01082444, "fear": 0.08914656, "happiness": 0.01705659, "sadness": 0.12435528, "surprise": 0.505405, "neutral": 0.2471686}, "29": {"frame": 696.0, "anger": 0.0067312033, "disgust": 0.012076825, "fear": 0.119636394, "happiness": 0.050674994, "sadness": 0.10363348, "surprise": 0.30674034, "neutral": 0.4005067}, "30": {"frame": 720.0, "anger": 0.0055045635, "disgust": 0.007132418, "fear": 0.4381167, "happiness": 0.011299197, "sadness": 0.22759083, "surprise": 0.15782543, "neutral": 0.15253094}, "31": {"frame": 744.0, "anger": 0.0045568827, "disgust": 0.008814145, "fear": 0.28483245, "happiness": 0.01234976, "sadness": 0.32902792, "surprise": 0.17339027, "neutral": 0.18702856}, "32": {"frame": 768.0, "anger": 0.0048167827, "disgust": 0.0061757322, "fear": 0.026631843, "happiness": 0.004134373, "sadness": 0.20831598, "surprise": 0.009331825, "neutral": 0.7405934}, "33": {"frame": 792.0, "anger": 0.0007387455, "disgust": 0.00044870705, "fear": 0.0011229975, "happiness": 0.003466881, "sadness": 0.16657338, "surprise": 0.0010580941, "neutral": 0.8265912}, "34": {"frame": 816.0, "anger": 0.004179055, "disgust": 0.008262255, "fear": 0.11971327, "happiness": 0.04251825, "sadness": 0.3481545, "surprise": 0.23184204, "neutral": 0.24533066}, "35": {"frame": 840.0, "anger": 0.0056682695, "disgust": 0.016946463, "fear": 0.31219184, "happiness": 0.044608153, "sadness": 0.31262466, "surprise": 0.20823154, "neutral": 0.09972906}, "Average": {"anger": 0.008822907897222223, "disgust": 0.013929593418055556, "fear": 0.21333047679166664, "happiness": 0.019727838569444444, "sadness": 0.35630028583333334, "surprise": 0.11331736169722222, "neutral": 0.27457153441666665}}
process(dic)
